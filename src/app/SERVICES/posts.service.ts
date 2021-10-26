import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post_i } from '../STORE/post-store/post-store.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _http: HttpClient) {}

  getPosts(): any {
    return this._http.get('http://www.serverdummies.com/api/posts/');
  }
}
