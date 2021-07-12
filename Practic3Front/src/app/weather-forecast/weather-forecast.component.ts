import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})

export class WeatherForecastComponent implements OnInit {

  public x: any;

  constructor(private http: HttpClient) {
    
    // httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:10804');
    // httpOptions.headers.append('Access-Control-Allow-Methods', 'GET');
    // httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    this.http.get<string>(environment.baseUrl).subscribe(res => {
      this.x = res;
    },
    error => {
      console.log(error);
    }
    );
   }
   

  ngOnInit(): void {
  }

}