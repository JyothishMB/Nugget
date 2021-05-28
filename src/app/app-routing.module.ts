import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { UserHomeComponent } from './users/user-home/user-home.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
  { 
    path: 'userhome', 
    component: UserHomeComponent,
    children: [
      { path: 'createuser', component: CreateUserComponent },
      { path: 'listuser', component: ListUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
