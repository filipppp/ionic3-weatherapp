import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { SystemProvider } from '../providers/system/system';
import {SettingsPage} from "../pages/settings/settings";
import {WeatherPage} from "../pages/weather/weather";
import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    WeatherPage
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    SettingsPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    SystemProvider,
    NativePageTransitions
  ]
})
export class AppModule {}
