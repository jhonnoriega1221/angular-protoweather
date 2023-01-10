import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

interface forecastDay {
  weekDayName: string;
  weekDayDate: string;
  maxTemperature: number;
  weatherCodeIconURL: string;
}

@Component({
  selector: 'app-weather-week-info',
  templateUrl: './weather-week-info.component.html',
  styleUrls: ['./weather-week-info.component.scss']
})
export class WeatherWeekInfoComponent implements OnInit {

  @Input() weekDays: string[] = [];
  @Input() weekMaxTemperature: number[] = [];
  @Input() weekWeatherCode: number[] = [];
  public forecastDays: forecastDay[] = []

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.setForecastDays(this.weekDays, this.weekMaxTemperature, this.weekWeatherCode)
  }

  private setForecastDays(weekDays: string[], weekMaxTemperature: number[], weekWeatherCode: number[]): void {
    let date = new Date();
    
    for (let i: number = 0; i < 7; i++) {

      date = this.convertStringToDate(weekDays[i]);

      const weekDay:string = i === 0 ? 'Hoy' : i === 1 ? 'Mañana' : this.getWeekDayName(date.getDay());
      const newForecastDay:forecastDay = {
        weekDayName: weekDay,
        weekDayDate: `${this.getWeekMonthName(date.getMonth())} ${date.getDate()}`,
        maxTemperature: weekMaxTemperature[i],
        weatherCodeIconURL: this.weatherService.getWeatherCodeData(weekWeatherCode[i]).iconURL
      }

      this.forecastDays.push(newForecastDay);
    }
  }

  private getWeekDayName(weekDay: number):string {
    switch (weekDay) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miercoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      default:
        return 'Sabado';
      
    }
  }

  private getWeekMonthName(weekMonth: number):string {
    switch (weekMonth) {
      case 0:
        return 'Enero';
      case 1:
        return 'Febrero';
      case 2:
        return 'Marzo';
      case 3:
        return 'Abril';
      case 4:
        return 'Mayo';
      case 5:
        return 'Junio';
      case 6:
        return 'Julio';
      case 7:
        return 'Agosto';
      case 8:
        return 'Septiembre';
      case 9:
        return 'Octubre';
      case 10:
        return 'Noviembre';
      default:
        return 'Diciembre';
    }
  }

  private convertStringToDate(dateString: string): Date {
    const date: Date = new Date();
    const [year, month, day] = dateString.split('-');

    date.setFullYear(Number.parseInt(year));
    date.setMonth(Number.parseInt(month)-1);
    date.setDate(Number.parseInt(day));
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    return date;
  }
}
