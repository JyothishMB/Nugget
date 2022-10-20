import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PostCreateComponent,
    PostEditComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PostModule { }
