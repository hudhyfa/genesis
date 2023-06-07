import { Component } from '@angular/core';
import { myCars } from 'src/model/myCars';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  cars:myCars[]=[];

  carId:string=""

  constructor(private api:ApiService){}

  ngOnInit():void{
    this.getAllCars()
  }
    getAllCars(){
      this.api.getAllCars().subscribe((data:any)=>{
          this.cars = data;
        })
    }
     
    search(event:any){
    this.carId=event.target.value;
    }
    
  




  }
 

