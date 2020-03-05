import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Post } from './models/posts.model';
import * as fromRoot from './selectors/posts.selector';


@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})

export class PostsPageComponent {
  posts$: Observable<Post[]> = this.store.select(state => state.posts);
 
  constructor(private store: Store<{ posts: Post[] }>) {}

  ngOnInit() {
    this.posts$ = this.getPosts();
  }

  getPosts(): Observable<Post[]> {
    return this.store.pipe(select(fromRoot.getPosts));
  }
}
