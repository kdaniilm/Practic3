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
    // this.headers.set('Accept', 'applcation/ json');
    // this.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    // this.headers.set('Access-Control-Allow-Origin', '*');
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Accept', 'applcation/ json');
    
    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:10804');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    this.http.get<string>(environment.baseUrl, httpOptions).subscribe(res => {
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

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 