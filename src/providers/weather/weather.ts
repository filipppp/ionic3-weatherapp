import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  private readonly apikey: string = "your_api_key";
  private readonly language: string = "de";
  private readonly infoUrl: string = `https://api.openweathermap.org/data/2.5/find?APPID=${this.apikey}&lang=${this.language}&`;

  constructor(private http: HttpClient) {

  }

  public getWeatherInfo(city: string): Observable<any> {
    return this.http.get(`${this.infoUrl}q=${city}&units=metric`)
  }

  public getWeatherInfoFromState(city: string, countryShort: string): Observable<any> {
    console.log(`${this.infoUrl}q=${city},${countryShort}&units=metric`)
    return this.http.get(`${this.infoUrl}q=${city},${countryShort}&units=metric`)
  }
}
