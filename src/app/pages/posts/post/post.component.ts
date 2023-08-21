import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {post} from "../../../postsInterface";
import {HttpService} from "../../../services/http.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: post | null = null
  id: number;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.httpService.getPostById(this.id).subscribe(data => this.post = data);
  }
}
