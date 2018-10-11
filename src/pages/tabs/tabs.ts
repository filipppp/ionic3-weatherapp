import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {SettingsPage} from "../settings/settings";
import {WeatherPage} from "../weather/weather";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
//(ionSelect)="transition($event)"
  homeroot = HomePage;
  weatherroot = WeatherPage;
  settingsroot = SettingsPage;
  aboutroot = AboutPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;
  constructor(public navCtrl: NavController,
              private nativePageTransitions: NativePageTransitions) {
  }
  private getAnimationDirection(index:number):string {
    let currentIndex = this.tabIndex;

    this.tabIndex = index;

    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return('right');
    }
  }

  public transition(e:any):void {
      let options: NativeTransitionOptions = {
      direction:this.getAnimationDirection(e.index),
      duration: 400,
      slowdownfactor: 2,
      slidePixels: 0,
      iosdelay: 20,
      androiddelay: 20,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 48
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.fade(options);
  }

}
