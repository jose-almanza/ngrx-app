import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { select, Store } from '@ngrx/store';
import { PostState } from './post.reducer';
import { getPosts } from './post.selector';
import { getAllPosts } from './post.actions';

@Injectable({
    providedIn: 'root'
  })
  export class PostService {
    constructor (private http: HttpClient, private store: Store<PostState>) {}
  
    getAll(): Observable<Post[]> {
      return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }

    loadPosts() {
      return this.store.dispatch({type: getAllPosts.type});
    }

    getPosts(): Observable<Post[]> {
      return this.store.pipe(select(getPosts));
    }

  }