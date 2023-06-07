import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars:any[],searchKey:String,propName:string): any[] {

    const result:any = [];

    //  function to show data if user doesnt search anything

    if(!cars||searchKey==""||propName==""){
      return cars;
    }

    // function to search

   cars.forEach((car:any)=>{
    if(car[propName].trim().toUpperCase().includes(searchKey.trim().toUpperCase())){
      result.push(car)
    }
   })

   return result;
   
  }

}
