<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="noindex,nofollow">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no">
    <title>MWAM SPECIAL PAGE</title>
    <meta name="description" content="MWAMのスペシャル動画ページ">
    <meta name="keywords" content="">
    <meta property="og:site_name" content="MWAM SPECIAL PAGE">
    <meta property="og:title" content="MWAM SPECIAL PAGE">
    <meta property="og:description" content="MWAMのスペシャル動画ページ">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mwamcthtour.work">
    <meta property="og:image" content="./dist/images/ogp.png">
    <meta property="fb:app_id" content="2283043815248036">
    <link rel="icon" sizes="32x32" href="./dist/images/favicon.png">
    <link rel="apple-touch-icon-precomposed" href="./dist/images/apple-touch-icon.png">
    <link rel="stylesheet" href="./dist/css/application.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous" defer></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" defer></script>
    <script src="./lib/js/app.js" type="text/javascript" charset="utf-8" defer></script>
  </head>
  <body>
    <?php date_default_timezone_set('Asia/Tokyo'); ?>
    <?php if(strpos($_SERVER['REQUEST_URI'],'0CXzFNkwxS4J7si') != false || (strtotime(date('Y-m-d H:i')) >= strtotime('2019-4-13 17:00')) ) : ?>
      <main class="video-sp-container">
        <video controls width="600px" height="400px" id="video">
          <source src="dist/movies/sample.webm" type="video/webm">
          <source src="dist/movies/sample.mp4" type="video/mp4">このブラウザーはサポート対象外になります。
        </video>
        <div class="video-ended-modal">
          <div class="inner">
            <div class="video-ended-link">
              <a href="https://www.mwamjapan.info/pages/cth2019_jpntour">
                <span class="upper"></span>
                <span class="downer"></span>
              </a>
            </div>
            <div class="video-ended-repeat-btn">
              <button class="btn btn-primary" id="videoRepeat"><img src="./dist/images/replay.svg" alt="play"></button>
            </div>
          </div>
        </div>
      </main>
    <?php else : ?>
      <?php require_once('./no_content.php') ?>
    <?php endif; ?>
  </body>
</html>