import { Injectable } from '@angular/core';
/* Services */
import { ApiService } from './api/api.service';
/* Rxjs */
import { Observable } from 'rxjs';
/* Models */
import { WeatherResponse } from '@core/models/weather.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends ApiService {
  private localWeather =
    '?lon=-70.7699145&lat=-33.4727092&ac=0&unit=metric&output=json&tzshift=0';

  getWeather(): Observable<WeatherResponse> {
    return this.get<WeatherResponse>(`${environment.weatherApi}${this.localWeather}`);
  }
}
