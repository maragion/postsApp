import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {DataService} from "../../../services/data.service";


@Component({
  selector: 'app-posts-loop',
  templateUrl: './posts-loop.component.html',
  styleUrls: ['./posts-loop.component.css'],
})


export class PostsLoopComponent implements OnInit{

// Todo
  posts: any

  constructor(private httpService: HttpService, private dataService: DataService) {
    this.posts = []
  }

  ngOnInit() {
    this.httpService.getPosts()
      .subscribe(data => this.posts = data  )
  }

  sendData() {
    this.dataService.setPosts(this.posts)
  }


}
