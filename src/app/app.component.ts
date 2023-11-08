import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  city: string = '';
  weatherData: any;
  error: string = '';

  constructor(private http: HttpClient) {}

  weather() {
    this.weatherData = null;
    this.error = '';
    
    let apiKey = 'bfa9676b5d906c86dc05a9ccc704e8a1';
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    let params = {
      q: this.city,
      appid: apiKey
    };

    this.http.get(apiUrl, { params }).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        this.error = 'City not found';

 }
);
  }

}

