import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsLoopComponent } from './pages/posts/posts-loop/posts-loop.component';
import { PostsLayoutComponent } from './pages/posts/posts-layout/posts-layout.component';
import { PostComponent } from './pages/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsLoopComponent,
    PostsLayoutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
