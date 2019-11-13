import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profil-follower',
  templateUrl: './profil-follower.component.html',
  styleUrls: ['./profil-follower.component.css']
})
export class ProfilFollowerComponent implements OnInit {
  id:number;
  username:string;
  page:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id       =+this.route.snapshot.paramMap.get('id');
    this.username =this.route.snapshot.paramMap.get('username');
    this.page     =+this.route.snapshot.queryParamMap.get('page');
   
  }

}
