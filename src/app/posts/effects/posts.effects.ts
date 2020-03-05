import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as PostApiActions from '../actions/posts-api.actions'
import * as PostsActions from '../actions/posts.actions';
import { PostsService } from '../services/posts.service';

 
@Injectable()
export class PostEffects {
 
  loadPosts$ = createEffect(
    () => this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      mergeMap(() => this.postsService.getAll()
        .pipe(
          map(posts => PostApiActions.searchSuccess({posts}),
            catchError(err => 
              of(PostApiActions.searchFailure({ errorMsg: err.message }))
            )
          )
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}
}