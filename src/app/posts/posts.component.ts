import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any[]=[];
  status=true;
  post = {
    id:0 ,
    title:'',
    body: '', 
    userId:0
  };
  constructor(private postService : PostService) { 
     
  }

  ngOnInit() {
   this. getPost(); 
  }

  getPost(){
    this.postService.getPostss()
     .subscribe(
       (response:any[])=>{
       this.posts=response;
    },error=>{
      alert('error innattendue')
      console.log(error)
    } 
    );
  }

  createPost(){
    this.postService.create(this.post)
    .subscribe(
      (response:any)=>{
         this.post.id=response.id;
         this.posts.unshift(this.post);
         this.post={
          id:0,
          title:'',
          body:'',
          userId:0
        }        
    },(error:AppError)=>{
      if(error instanceof BadInput){
        alert('c post deja supprimer')
      }else{
        alert('error inattendue')
      }
    }
    )
  }

  editPost(post){
    this.post=post;
    this.status=false;
  }

  updatePost(){
    this.postService.update(this.post)
     .subscribe(response=>{
      this.post={
        id:0,
        title:'',
        body:'',
        userId:0
      }
      this.status=true;  
     })
    console.log(this.status) 
  }

  deletePost(post){
    this.postService.delete(post)
    .subscribe(response => {
      console.log(response)
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error:AppError)=>{
      if(error instanceof NotFoundError){
        alert('c post deja supprimer') 
      }else{
        alert('error inattendue')
      }
    })
  }
}