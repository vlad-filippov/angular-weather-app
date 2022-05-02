import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContainer } from './weather.container';

describe('WeatherComponent', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
