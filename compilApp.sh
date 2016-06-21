#!/bin/bash
cd 

cd $1

cordova build --release android

cd platforms/android/build/outputs/apk/

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $2 android-release-unsigned.apk alias_name

/home/sfallou/androidSDK/android-sdk-linux/build-tools/23.0.1/zipalign -v 4 android-release-unsigned.apk $3 

cp $3 ~/Bureau/

cd

chmod -R 777 ~/Bureau/$3 
