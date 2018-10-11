import {Component} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";
import {SystemProvider} from "../../providers/system/system";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  private imgUrl;
  private temp;
  private descr;
  private city;
  private countryCode;
  private time = new Date();


  constructor(public navCtrl: NavController, private nativePageTranstions: NativePageTransitions, public navParams: NavParams, private weatherProvider: WeatherProvider, private systemProvider: SystemProvider) {
      this.weatherProvider.getWeatherInfoFromState("Wien", "AT")
        .subscribe(response => {
          const dataSet = response.list[0];
          let pictureCode = dataSet.weather[0].icon;

          this.imgUrl = `../../assets/icon/weathericons/${pictureCode}.svg`;
          this.temp = dataSet.main.temp;
          this.descr = dataSet.weather[0].description;
          this.countryCode = dataSet.sys.country;
          this.city = dataSet.name;
        });
  }

  ionViewDidLoad() {

  }

  ionViewWillLeave() {


  }

}
