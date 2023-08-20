import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private posts: [] = [];


  setPosts(data: []) {
    this.posts = data;
  }

  getPosts() {
    return this.posts
  }
}
