export interface WeatherModel {
  location?: {
    name?: string;
    country?: string;
    localtime?: string;
  };
  forecast?: {
    forecastday: ForecastDayModel[];
  };
  current?: CurrentModel;
}

interface CurrentModel {
  temp_c?: number;
  condition?: ConditionModel;
  wind_kph?: number;
  humidity?: number;
}

interface ForecastDayModel {
  tabName?: string;
  date?: string;
  day?: {
    maxtemp_c?: number;
    mintemp_c?: number;
    maxwind_kph?: number;
    condition?: ConditionModel;
  };
  hour?: HourModel[];
}

export interface HourModel {
  time?: string;
  temp_c?: number;
  humidity?: number;
  condition?: ConditionModel;
  wind_kph?: number;
}

interface ConditionModel {
  text?: string;
  icon?: string;
}
