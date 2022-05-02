import { Component, Input } from '@angular/core';
import { WeatherModel } from '../../models/weather.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  @Input() public weather: WeatherModel;
}
