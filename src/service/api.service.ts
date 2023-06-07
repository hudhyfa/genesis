import { Injectable } from '@angular/core';

import { myCars } from 'src/model/myCars';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:3000/cars"
  constructor(private http:HttpClient) { }

  // function to get all the cars
  getAllCars():Observable<myCars>{
    return this.http.get(this.baseUrl);
  }

  // function to view specific car
  viewCar(model:any){
    return this.http.get(`${this.baseUrl}/${model}`)
  }

  // function to add car
  addCar(carbody:any){
    return this.http.post(this.baseUrl,carbody)
  }

  // function to  update car
  updateCar(carId:any,carbody:any){
    return this.http.put(`${this.baseUrl}/${carId}`,carbody)
  }

  // function to delete car
  deleteCar(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
