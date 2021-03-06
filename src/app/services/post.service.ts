import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Post } from '../_models/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];
  private postsUpdated =  new Subject<Post[]>();


  constructor(private http: HttpClient, private router: Router) { }

  getPost(id: string) {
    return this.http.get<{ _id: string, title: string, content: string }>("http://localhost:5000/api/posts/" + id);
  }

  getPosts(){
    this.http.get<{message:string, posts: any }>(
      "http://localhost:5000/api/posts"
      )
      .pipe(map((postData) =>{
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe((posts) => {
        this.posts = posts;
        this.postsUpdated.next([...this.posts]);
      });
    //return [...this.posts];//Get elements from the posts array and create another array with that elements
  }

  getPostUpdatedListner(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = { id:'', title:title, content: content };
    this.http.post<{ message: string, postId: string }>("http://localhost:5000/api/posts", post)
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }

  updatePost(id: string, title: string, content: string) {
    const post: Post = { id: id, title: title, content: content };
    this.http.put("http://localhost:5000/api/posts/" + id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string){
    this.http.delete("http://localhost:5000/api/posts/" + postId)
      .subscribe(() => {
        console.log('Deleted!');
          const updatedPosts = this.posts.filter(post => post.id !== postId);
          this.posts = updatedPosts;
          this.postsUpdated.next([...this.posts]);
      });
  }

}
