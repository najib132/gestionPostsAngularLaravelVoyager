import { Injectable } from '@angular/core';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService  {

  private url="https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) {}
  
  //methode get 
  getPostss(){
    return this.http.get(this.url)
    }
//methode create
  create(resource:any){
    return this.http.post(this.url, resource)
  }
//methode update
  update(resource:any){
    return this.http.put(this.url+'/'+resource.id,resource)
  }
//methode delete
  delete(resource:any){
    return this.http.delete(this.url+'/'+resource.id)
    }

  private handleError(error : Response){
    if(error.status===404){
      return Observable.throw(new NotFoundError); 
    }
    if(error.status===400){
      return Observable.throw(new BadInput)
    }
    return Observable.throw(new AppError);
   
  }
}
 