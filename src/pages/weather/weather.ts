import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WeatherService} from '../../app/services/weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  city: String;
  state: String;
  weather: any;
  searchStr: String;
  results: any;

  constructor(public navCtrl: NavController, private ws: WeatherService) {
    this.city = "Austin";
    this.state = "TX";
  }

  ngOnInit(){
    this.ws.getWeather(this.city, this.state)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getQuery(){
    this.ws.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      })

  }

}
