// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DragScrollModule } from 'ngx-drag-scroll';

// Components
import { HourComponent } from './components/hour/hour.component';
import { CurrentComponent } from './components/current/current.component';
import { WeatherContainer } from './containers/weather/weather.container';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    WeatherContainer,
    HourComponent,
    CurrentComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    DragScrollModule,
  ],
})
export class WeatherModule {
}
