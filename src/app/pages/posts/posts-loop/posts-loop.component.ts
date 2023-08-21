import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {post} from "../../../postsInterface";


@Component({
  selector: 'app-posts-loop',
  templateUrl: './posts-loop.component.html',
  styleUrls: ['./posts-loop.component.css'],
})

export class PostsLoopComponent implements OnInit {

  posts: post[]

  constructor(private httpService: HttpService) {
    this.posts = []
  }

  ngOnInit() {
    this.httpService.getPosts()
      .subscribe(data => this.posts = data)

  }
}
