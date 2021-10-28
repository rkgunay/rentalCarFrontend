import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  apiUrl = "https://localhost:44351/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getcardetailsbyid?id="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  
}
