import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
 
 w:{}
  public weatherData: any;
  constructor(private formBuilder: FormBuilder,private apixuService:DataService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
//   sendToAPIXU(formValues) {
//   this.apixuService.getWeather(formValues.location).subscribe(res=>{
//     this.w=res;
    
//   })
// }
sendToAPIXU(formValues) {
  this.apixuService.getWeather(formValues.location).subscribe(data => {
    this.weatherData = data;
    // console.log(this.weatherData);
  });
  
}

}
