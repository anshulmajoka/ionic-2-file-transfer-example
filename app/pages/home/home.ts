import {Component} from "@angular/core";
import {Platform, NavController, Alert} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  constructor(private platform: Platform, private nav: NavController) { }

  downloadImage(image) {
    this.platform.ready().then(() => {
      const fileTransfer = new FileTransfer();
      const imageLocation = `${cordova.file.applicationDirectory}www/${image}`;

      let targetPath; // storage location depends on device type.

      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        targetPath = cordova.file.documentsDirectory + image;
      }
      else if(this.platform.is('android')) {
        targetPath = cordova.file.dataDirectory + image;
      }
      else {
        // do nothing, but you could add further types here e.g. windows/blackberry
        return false;
      }

      fileTransfer.download(imageLocation, targetPath,
          (result) => {
            const alertSuccess = Alert.create({
              title: 'Download Succeeded!',
              subTitle: `${image} was successfully downloaded to: ${targetPath}`,
              buttons: ['Ok']
            });

            this.nav.present(alertSuccess);
          },
          (error) => {

            const alertFailure = Alert.create({
              title: 'Download Failed!',
              subTitle: `${image} was not successfully downloaded, please try again later`,
              buttons: ['Ok']
            });

            this.nav.present(alertFailure);
          }
      );
    });
  }
}
