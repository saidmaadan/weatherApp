import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { WeatherApiKey } from '../WeatherApiKey';

@Injectable()
export class WeatherService{
  http:any;
  apiKey: String;
  conditionsUrl: String;
  searchUrl: String;

  constructor(http:Http){
    this.http = http;
    this.apiKey = 'WeatherApikey.API_Key';
    this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    this.searchUrl = 'http://localhost:8100/search/aq?query=';

  }

  getWeather(city, state){
    return this.http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

  searchCities(searchStr){
    return this.http.get(this.searchUrl+''+searchStr)
      .map(res => res.json());

  }

}
