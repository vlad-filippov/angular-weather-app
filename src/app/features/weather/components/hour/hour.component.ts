import { Component, Input, OnInit } from '@angular/core';
import { HourModel } from '../../models/weather.model';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss']
})
export class HourComponent {
  @Input() public hour: HourModel;
}
