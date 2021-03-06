/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import gulp from 'gulp';
import connect from 'gulp-connect';
import babel from 'gulp-babel';
import del from 'del';
import eslint from 'gulp-eslint';
import webpack from 'webpack-stream';
import mocha from 'gulp-mocha';
import flow from 'gulp-flowtype';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpackConfig from './webpack.config.babel';

const Connect = require('gulp-connect-php');
require('babel-register');

const paths = {
  allSrcJs: 'src/**/*.js',
  allLibTests: 'lib/test/**/*.js',
  serverSrcJs: 'src/server/**/*.js',
  sharedSrcJs: 'src/shared/**/*.js',
  clientEntryPoint: 'src/client/app.js',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  clientBundle: 'dist/client-bundle.js?(.map)',
  pug: 'src/pug/**/*.pug',
  html: './',
  sass: 'src/sass/**/*.sass',
  css: 'dist/css/',
  libDir: 'lib',
  js: 'dist/js',
};

const plumberOption = {
  errorHandler(error) {
    console.log(error.message);
    this.emit('end');
  },
};

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
]));

gulp.task('build', ['lint', 'clean', 'pug', 'sass'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(plumber(plumberOption))
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir)),
);

gulp.task('main', ['test'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.js)),
);

gulp.task('pug', () =>
  gulp.src(paths.pug)
    .pipe(plumber(plumberOption))
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.html)),
);

gulp.task('sass', () => {
  const processors = [
    cssnext(),
  ];
  gulp.src(paths.sass)
    .pipe(plumber(plumberOption))
    .pipe(sass({
      outputStyle: 'expanded',
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', () => {
  const watchList = [
    paths.allSrcJs,
    paths.sass,
    paths.pug,
  ];
  gulp.watch(watchList, ['main', 'reload']);
});

const server = new Connect();

gulp.task('connect', () => {
  server.server({
    root: './',
    livereload: true,
  });
});

gulp.task('default', ['watch', 'main', 'connect']);


gulp.task('html', () => {
  gulp.src('./*.pug')
    .pipe(connect.reload());
});


gulp.task('server', ['default'], () => {
  const serverSetting = {
    server: {
      baseDir: './dist/',
      index: 'index.html',
    },
  };
  browserSync(serverSetting);
});

gulp.task('reload', () =>
  browserSync.reload(),
);

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(plumber(plumberOption))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(flow({ abort: true })),
);

gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha()),
);
