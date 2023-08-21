import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {post} from "../postsInterface";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  postsUrl: string = "https://jsonplaceholder.typicode.com/posts/";

  getPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.postsUrl)
  }

  getPostById(id: number): Observable<post> {
    return this.http.get<post>(this.postsUrl + id)
  }
}
