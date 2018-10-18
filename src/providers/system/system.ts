import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Loading, LoadingController} from "ionic-angular";

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {

  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
  }

  showLoading(duration: number = 3000, content: string = "Loading..."): void {
    const loader = this.loadingCtrl.create({
      content: content,
      duration: duration
    });
    loader.present();
  }

  emptyLoading(): Loading {
    return this.loadingCtrl.create({});
  }

  nameLoading(content: string = "Loading..."): Loading {
    return this.loadingCtrl.create({
      content: content
    });
  }

}
