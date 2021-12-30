#!/bin/sh

#まず、yarn initしてpackage.jsonを作成する

# それから、必要なファイルをまとめて記述する（下記）

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
# yarn add global browserify --dev  # jsファイルをまとめるビルドする（globalとローカル両方必要らしい）
# yarn add vinyl-source-stream --dev # browserifyをgulp.watchを使って自動で実行したい場合必要
# yarn add jquery                 # サービスで必要なので--devなしで


# コマンドで「yarn.sh」ファイルがあるディレクトリまで移動する。
# 今回の場合だと、 cd で dental_clinic まで移動する
# コマンドでsh yarn.sh 実行
# gulp-sassを4.1.0にダウングレードする(yarn upgrade gulp-sass@4.1.0)
# gulp-imageminを7.1.0にダウングレードする(yarn upgrade gulp-imagemin@4.1.0)