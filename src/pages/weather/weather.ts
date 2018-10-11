import {Component} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";
import {SystemProvider} from "../../providers/system/system";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions";
import Chart from 'chart.js';
import 'chartjs-plugin-datalabels';

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

    let weatherData = [-10,-7,0,-6,-20];
    let minTemp = Math.min(...weatherData);
    let maxTemp = Math.max(...weatherData);
    let diff = Math.abs(maxTemp-minTemp);

    let dateArray = [];
    const NOW = new Date();
    for(let x = 0; x <= 4; x++) {
      dateArray.push(`${NOW.getHours()}:00`);
      NOW.setHours(NOW.getHours()+3);
    }
    // @ts-ignore
    // @ts-ignore
    let tempChart = new Chart(document.getElementById("tempChart"),{
      type: 'line',
      data: {
        labels: dateArray,
        datasets: [{
          data: weatherData,
          fill: 'start',
          backgroundColor: 'rgba(72,138,255,0.25)',
          borderColor: 'rgba(72,138,255,0.75)',
          borderWidth: 3,
          pointRadius: 2,
          cubicInterpolationMode: 'default'
        }]
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: Math.round,
            color: 'rgba(135, 135, 135, 0.5)',
            font: {
              weight: 'bold',
              family: 'Arial'
            }
          }
        },
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        scales: {
          elements: {
            line: {
              fill: 'rgba(72,138,255,0.75)'
            }
          },
          yAxes: [{
            ticks: {
              display: false,
              max: maxTemp + diff/2.5,
              min: minTemp - diff/5
            },
            gridLines: {
              zeroLineColor: 'transparent',
              zeroLineWidth: 2,
              drawTicks: false,
              drawBorder: false,
              color: 'transparent'

            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 13,
              fontFamily: 'Arial',
              fontColor: 'rgba(135, 135, 135, 0.5)',
              fontStyle: 'bold',
              padding: 20
            },
            gridLines: {
              zeroLineColor: 'transparent',
              zeroLineWidth: 2,
              drawTicks: false,
              drawBorder: false,
              color: 'transparent'
            }
          }]
        }
      }
    });
  }

  ionViewWillLeave() {


  }

}
