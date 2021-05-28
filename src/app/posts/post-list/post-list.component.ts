import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/_models/Post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postservice: PostService) {
    this.postsSub = new Subscription();
  }

  ngOnInit() {
    this.isLoading = true;
    this.postservice.getPosts();
    this.postsSub = this.postservice.getPostUpdatedListner()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDelete(postId: string){
    this.postservice.deletePost(postId);
  }

}
