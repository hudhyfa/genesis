import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-viewing-page',
  templateUrl: './viewing-page.component.html',
  styleUrls: ['./viewing-page.component.css']
})
export class ViewingPageComponent {
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

  model:string=""

  carData:any=""

  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any) =>{
      this.model= data.id; 
    })

    this.api.viewCar(this.model).subscribe((data:any)=>{
      this.carData=data;
      console.log(this.carData);
      
    })
  }
}
