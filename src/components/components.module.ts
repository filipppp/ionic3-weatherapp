import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { WeatherComponent } from './weather/weather';
@NgModule({
	declarations: [WeatherComponent],
	imports: [IonicModule],
	exports: [WeatherComponent]
})
export class ComponentsModule {}
