import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myCars } from 'src/model/myCars';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-updating-page',
  templateUrl: './updating-page.component.html',
  styleUrls: ['./updating-page.component.css']
})
export class UpdatingPageComponent {

  carId:any=""

  car:myCars={}

  constructor(private activatedRoute: ActivatedRoute,private api:ApiService,private router:Router){}

  ngOnInit():void {
// function to get the id
    this.activatedRoute.params.subscribe((data)=>{
      this.carId=data['id'];
      console.log(this.carId);
        })
// function to fetch the data using the above id
    this.api.viewCar(this.carId).subscribe((data)=>{
      this.car=data;
    })

  }
  // function to update the data
   updateCar(){
    this.api.updateCar(this.carId,this.car).subscribe((data)=>{
      this.router.navigateByUrl('')
    })
   }
    
  //  function to delete the car
   deleteCar(){
    this.api.deleteCar(this.carId).subscribe((data)=>{
      this.router.navigateByUrl('')
    });
   }      
}
