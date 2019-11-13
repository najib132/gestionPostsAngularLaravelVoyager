import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  methodContact=[{id:1,name:"telephone"},{id:2,name:"sms"},{id:3,name:"email"}];

  constructor() { }

  ngOnInit() {
  }

  submit(f){
     console.log(f.value);
  }

}
