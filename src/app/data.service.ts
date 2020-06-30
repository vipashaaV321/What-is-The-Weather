import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
getWeather(location){
  return this.http.get(
      'http://api.weatherstack.com/current?access_key=1b1441a8589305ea1c2524d6acbca8b5&query=' + location
  );
}

}
