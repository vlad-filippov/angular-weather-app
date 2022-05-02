import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WeatherContainer } from './containers/weather/weather.container';

const routes: Routes = [
  {
    path: '',
    component: WeatherContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {
}
