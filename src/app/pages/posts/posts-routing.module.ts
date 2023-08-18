import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsLayoutComponent} from "./posts-layout/posts-layout.component";
import {PostsLoopComponent} from "./posts-loop/posts-loop.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {
    path: '',
    component: PostsLayoutComponent,
    children: [
      {path: "", component: PostsLoopComponent},
      {path: ":id", component: PostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
