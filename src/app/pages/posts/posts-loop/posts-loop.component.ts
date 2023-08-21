import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {post} from "../../../postsInterface";
import {HttpEvent} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-posts-loop',
  templateUrl: './posts-loop.component.html',
  styleUrls: ['./posts-loop.component.css'],
})

export class PostsLoopComponent implements OnInit {

  posts: post[] | null = null;

  constructor(private httpService: HttpService, private router: Router) {

  }

  ngOnInit() {
    this.httpService.getPosts()
      .subscribe(data => this.posts = data)

  }

  navigateToPost($event: HttpEvent<number>) {
    this.router.navigate([`/posts/`, $event])

  }
}
