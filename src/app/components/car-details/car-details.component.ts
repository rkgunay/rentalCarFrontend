import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailsService } from 'src/app/services/car-details.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  cars:Car[] = [];
  dataLoaded = false;
  constructor(private carDetailsService:CarDetailsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
      this.getCarDetails(params["carId"]);
    }); 

  }

  getCarDetails(carId:number){
    this.carDetailsService.getCarDetails(carId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }

}
