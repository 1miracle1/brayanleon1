import { Component, OnInit } from '@angular/core';
import { Weather } from '@core/models/weather.model';
import { WeatherService } from '@core/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  public weather: Weather | undefined;
  public date = new Date();

  public precipitationTypes: { [key: string]: string } = {
    none: 'Sin precipitaciones',
    rain: 'Lluvia',
    snow: 'Nieve'
  };

  constructor(private weatherService: WeatherService) {}

  async ngOnInit() {
    this.weatherService.getWeather().subscribe((response) => {
      const [first] = response?.dataseries;
      this.weather = first;
    });
  }

  public getCloudCover(): string {
    const cloudCover = this.weather?.cloudcover;
    if (cloudCover === undefined) {
      return '';
    }

    if (cloudCover <= 2) {
      return 'Despejado';
    }

    if (cloudCover <= 6) {
      return 'Parcialmente nublado';
    }

    if (cloudCover <= 8) {
      return 'Nublado';
    }

    return 'Muy nublado';
  }
}
