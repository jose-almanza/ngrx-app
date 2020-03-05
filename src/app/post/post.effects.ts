import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostService } from './post.service';
import { getAllPosts, getAllPostsSuccess, getAllPostFailure } from './post.actions';

@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(getAllPosts),
    mergeMap(() => 
      this.postService.getAll()
      .pipe(
        map(posts => getAllPostsSuccess({posts})),
        catchError(err => getAllPostFailure)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}
}