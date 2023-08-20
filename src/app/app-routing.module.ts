import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GuardService} from "./services/guard.service";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'posts',
    canActivate: [GuardService],
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
