#!/bin/sh

yarn config set network-timeout 1000000 #タイムアウト時間を長くしておく
yarn add gulp --dev             # gulpをインストール
yarn add sass --dev             # sassをインストール
yarn add gulp-sass --dev  # sassをcssにビルドする
yarn add gulp-sass-glob --dev   # sassファイルのimportをひとつにまとめる
yarn add gulp-plumber --dev     # sassの構文エラーがあってもgulpを止めない
yarn global add gulp-cli --dev  # gulpをコマンドから使えるように（グローバルのみインストール）
yarn add gulp-rename --dev      # ファイル名変更
yarn add gulp-clean-css --dev   # css圧縮
yarn add gulp-postcss --dev     # プレフィックス自動付与してくれるプラグイン???未使用
yarn add gulp-autoprefixer --dev # プレフィックス自動付与???未使用
yarn add gulp-imagemin --dev    # 画像圧縮
yarn add gulp-changed --dev     # 画像圧縮されたファイルを返す
yarn add imagemin-pngquant --dev # 画像圧縮(pngオプション設定)
