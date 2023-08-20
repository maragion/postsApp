import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // ToDo
  posts: any;
  id: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.posts = this.dataService.getPosts();
  }
}
