# Ionic 2 File Transfer Example

A simple example of how you can download files to a device using Ionic 2, Typescript (but can easily be converted to ES6), and by utilising the `cordova-plugin-file-transfer` plugin.

This example currently saves the file:

**iOS** - in the app-specific `Documents/` folder using `cordova.file.documentsDirectory`

**Android** - persistent and private data storage within the application's sandbox using `cordova.file.dataDirectory`

[Here's the list](https://github.com/apache/cordova-plugin-file#where-to-store-files) of the different places you can store files using this plugin.
 
## Build

Requires `cordova`, `typescript` and `typings` to be globally installed. Note that even if you are getting Typescript errors (it's to do with Ionic/Typescript themselves) when building, it will still build and work on-device successfully.

#### iOS

Requires: `Xcode` (plus a developer license), a recent version of Ionic 2.

* download/clone repo.
* `npm install`
* `ionic build ios`
* open up `Xcode` and run the application on a iPhone/iPad device.

### Android

* download/clone repo.
* `npm install`
* `ionic build android`
* plug an android device in, then run `ionic run android` (make sure USB debugging is enabled)

## Testing

#### iOS

To check the file is actually on the device, on `Xcode` you can go to `Window` -> `Devices`, then
 
* select the device you downloaded the file to
* select the app you used to download the file (in this case `Ionic2FileTransferExample`)
* then you should see the folder `Documents`, where the image was downloaded to.

#### Android

Untested right now, you should be able to locate the file using an app such as ES File Explorer.

## License

MIT
