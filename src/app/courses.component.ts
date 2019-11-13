import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
    selector:'courses',
    template : `
    <input [(ngModel)]="email" type="text" (keyup.enter)="onkeyUp()">
    <p>{{ email }}</p>
    `
})

export class CoursesComponent{
   email:string="najib@gmail.com";
   onkeyUp(){
      console.log(this.email);
   }


}