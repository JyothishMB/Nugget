import { formatCurrency } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/_models/Post';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Output() postCreated = new EventEmitter<Post>();

  private mode = 'create';
  private postId: string;
  post: Post;
  isLoading = false;
  form: FormGroup;
  
  constructor(public postservice: PostService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, {
        validators: [Validators.required]
      })
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')){
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postservice.getPost(this.postId).subscribe(postData => {
          this.isLoading = false
          this.form.setValue({
            title: postData.title,
            content: postData.content
          })
          this.post = { id: postData._id, title: postData.title, content: postData.content }
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    })
  }

  onSavepost(){
    if(this.form.invalid){
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create'){
      this.postservice.addPost(this.form.value.title, this.form.value.content);
    } else {
      this.postservice.updatePost(this.postId, this.form.value.title, this.form.value.content);
    }
    this.isLoading = false;
    
    this.form.reset();
  }

}
