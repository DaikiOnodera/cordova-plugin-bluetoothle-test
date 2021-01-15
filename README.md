### directories
```
.
├── node_modules       - added by cordova
├── platforms          - ios, android, windows, osx project
├── plugins            - plugins
└── www                - nus service client
```

<h1 align="center">
  cordova-plugin-bluetoothle example
</h1>

## Contents

- [Prerequisites](#prerequisites)
- [Building sample app](#building-sample-app)

## <a name="prerequisites"></a> Prerequisites
#### テスト環境<br>
Advertising Device: nRF52840-DK<br>
Android 8.0.0, ios 14.2, Windows 10, OSX 10.15.7<br>
Android Studio 4.1.1, Xcode 12.3 Visual Studio 2015<br>
#### 準備<br>
nRF52840-DK ble\_peripheral-\>ble\_app\_uartを実行してAdvertisingしておく。<br>
cordova 10.0.0のインストール<br>
[cordovaのios開発環境の設定](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/)<br>
[cordovaのandroid開発環境の設定](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)<br>
[cordovaのosx開発環境の設定](https://cordova.apache.org/docs/en/latest/guide/platforms/osx/)<br>
[cordovaのwindows開発環境の設定](https://cordova.apache.org/docs/en/latest/guide/platforms/windows/)<br>
## <a name="building-sample-app"></a> Building sample app
#### iosの実行例
```
cordova plugin add cordova-plugin-bluetoothle
cordova build ios
open platforms/ios/HelloCordova.xcworkspace
```
Xcodeでbuild, runを行うことで、Staging/www/js/index.jsに書かれたwriteが実行され、nRF52840側にhello文字列が送信されます。<br>
nRF52840側のteratermなどから文字列を送信することで、画面に受信した文字列が表示されます。<br>
Xcode上で編集する場合はStaging-\>www-\>js-\>index.jsを編集してください。(\* cordova build iosでwww以下のフォルダがStagingフォルダにコピーされる)<br>
#### Androidの実行例
```
cordova plugin add cordova-plugin-bluetoothle
cordova build android
```
Android Studioを起動し、Import Project(Gradle, Eclipse ADT, etc.)からplatforms/androidを開く<br>
Android Studioでbuild, runを行うことで、app/assets/www/js/index.jsに書かれたwriteが実行され、nRF52840側にhello文字列が送信されます。<br>
nRF52840側のteratermなどから文字列を送信することで、画面に受信した文字列が表示されます。<br>
Android Studio上で編集する場合はapp-\>assets-\>www-\>js-\>index.jsを編集してください。(\* Android Studio上での編集は元のwwwフォルダ以下に反映されないので、要コピー)<br>

#### OSXの実行例
```
cordova plugin add cordova-plugin-bluetoothle
cordova build osx
open platforms/osx/HelloCordova.xcodeproj
```
Xcodeでbuild, runを行うことで、Staging/www/js/index.jsに書かれたwriteが実行され、nRF52840側にhello文字列が送信されます。<br>
nRF52840側のteratermなどから文字列を送信することで、画面に受信した文字列が表示されます。<br>
Xcode上で編集する場合はStaging-\>www-\>js-\>index.jsを編集してください。(\* cordova build osxでwww以下のフォルダがStagingフォルダにコピーされる)<br>

#### Windowsの実行例
```
cordova plugin add cordova-plugin-bluetoothle
cordova build windows
```
Explorerからplatforms/windows/CordovaApp.Windows10.slnを開いてビルド実行<br>
www/js/index.jsに書かれたwriteが実行され、nRF52840側にhello文字列が送信されます。<br>
nRF52840側のteratermなどから文字列を送信することで、画面に受信した文字列が表示されます。<br>
VS上で編集する場合はwww-\>js-\>index.jsを編集してください。<br>


#### <a name="warn"></a>注意点(Windows10)
Visual Studio 2019はjsprojをサポートしていないため、実行できません。<br>
plugins/cordova-plugin-bluetoothle/src/windows/BluetoothLePlugin.jsの317行目"name":device.nameをコメントアウトする必要があります。(windowsではdeviceという変数が返ってこないため。)<br>

#### 注意点(Windows, OSX)
Windowsはjsprojという最新のVisual Studioでサポートされないプロジェクトになっている<br>
OSXは最新がcatalina 10.15だが、プロジェクトを開くとMavericks 10.9向けのプロジェクトになっている<br>
どちらもdeprecatedなメソッドを多く使っていて、将来的に使えない可能性がある。<br>
