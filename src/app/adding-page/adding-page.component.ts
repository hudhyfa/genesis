import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { myCars } from 'src/model/myCars';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-adding-page',
  templateUrl: './adding-page.component.html',
  styleUrls: ['./adding-page.component.css']
})
export class AddingPageComponent {

  car:myCars={}

  constructor(private api:ApiService, private router:Router){}

  addCar(){
    this.api.addCar(this.car).subscribe((data:any)=>{
      this.router.navigateByUrl('')
    })
  }

}
