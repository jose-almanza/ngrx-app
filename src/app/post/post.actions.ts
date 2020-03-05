import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const getAllPosts = createAction('[Post component] Get All Posts');

export const getAllPostsSuccess = createAction('[Post component] Get Posts Success',props<{ posts: Post[] }>());
  
  export const getAllPostFailure = createAction(
    '[Post component] Load Posts Failure',
    props<{ error: string }>()
  );
  