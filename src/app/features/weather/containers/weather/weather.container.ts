import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';
import { WeatherModel } from '../../models/weather.model';
import { Subject, Subscription } from 'rxjs';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.container.html',
  styleUrls: ['./weather.container.scss'],
})
export class WeatherContainer implements OnInit, OnDestroy {
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  public tabs: string[] = ['Today', 'Tomorrow', 'Day after tomorrow'];
  public searchSubject: Subject<string> = new Subject<string>();
  public weather: WeatherModel;
  private subscription: Subscription = new Subscription();

  constructor(
    private waterService: WeatherApiService,
  ) {
  }

  public ngOnInit(): void {
    this.getForecastWeather();
    this.subscribeToSearch();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getForecastWeather(city: string = 'Amsterdam'): void {
    this.waterService.getForecastWeather(3, city)
      .pipe(first())
      .subscribe(weather => {
        this.weather = {
          ...weather,
          forecast: {
            forecastday: weather.forecast.forecastday.map((forecast, index) => {
              return {
                ...forecast,
                tabName: this.tabs[index],
              };
            }),
          },
        };
      });
  }

  private subscribeToSearch(): void {
    this.subscription.add(
      this.searchSubject.asObservable()
        .pipe(distinctUntilChanged(), debounceTime(1000))
        .subscribe(search => {
          this.getForecastWeather(search);
        }),
    );
  }
}
