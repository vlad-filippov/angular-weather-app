import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherModel } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  public endpoint: string = 'http://api.weatherapi.com/v1/';

  constructor(
    private http: HttpClient,
  ) {
  }

  public getForecastWeather(days: number, location: string): Observable<WeatherModel> {
    const key = 'd9ff9bcf4fad4b94a9e195350222904';

    return this.http.get(`${this.endpoint}forecast.json?key=${key}&q=${location}&aqi=yes&days=${days}`);
  }
}
