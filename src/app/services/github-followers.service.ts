import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService  {

  constructor(http : HttpClient) { 
  }

  private url="https://jsonplaceholder.typicode.com/posts";
 

  
} 
