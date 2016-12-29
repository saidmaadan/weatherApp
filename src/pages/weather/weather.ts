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
    // this.zmw = '00000.2.WDNAA';
    if(localStorage.getItem('location') !== undefined){
      this.zmw = JSON.parse(localStorage.getItem('location')).zmw;
    } else {
      this.zmw = '00000.2.WDNAA';
    }
  }

  getQuery(){
    this.ws.searchCities(this.searchStr)
      .subscribe(res => {
        console.log(res)
        this.results = res.RESULTS;
      });

  }

  selectCity(location){
    this.results = [];
    this.ws.getWeather(location.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

}
