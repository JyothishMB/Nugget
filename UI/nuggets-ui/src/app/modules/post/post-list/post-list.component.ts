import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post('Title1','Test content 1'),
    new Post('Title2','Test content 2'),
    new Post('Title3','Test content 3'),
    new Post('Title4','Test content 4'),
    new Post('Title5','Test content 5'),
    new Post('Title6','Test content 6'),
    new Post('Title7','Test content 6'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
