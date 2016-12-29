import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { WeatherApiKey } from '../WeatherApiKey';

@Injectable()
export class WeatherService{
  http:any;
  apiKey: String;
  conditionsUrl: String;

  constructor(http:Http){
    this.http = http;
    this.apiKey = 'WeatherApiKey.API_Key';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

  }

  getWeather(city, state){
    return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

}
