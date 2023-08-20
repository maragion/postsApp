import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {  }

  postsUrl: string = "https://jsonplaceholder.typicode.com/posts";

  getPosts() {
    return this.http.get(this.postsUrl)
  }
}
