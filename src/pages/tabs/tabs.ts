import { Component } from '@angular/core';

import { WeatherPage } from '../weather/weather';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WeatherPage;
  tab2Root: any = AboutPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
