import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService} from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weather: any;
  zmw: any;
  searchStr: String;
  results: any;

  constructor(public navCtrl: NavController, private ws: WeatherService) {

  }

  ngOnInit(){
    this.getDefaultLocation();
    this.ws.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getDefaultLocation(){
    this.zmw = '10001.11.99999';
  }

  getQuery(){
    this.ws.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      })

  }

  selectCity(location){
    this.results = [];
    this.ws.getWeather(location.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

}
