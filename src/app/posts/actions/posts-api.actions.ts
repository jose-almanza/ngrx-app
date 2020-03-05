import { createAction, props } from '@ngrx/store';

import { Post } from '../models/posts.model';

export const searchSuccess = createAction(
  '[Posts/API] Search Success',
  props<{ posts: Post[] }>()
);

export const searchFailure = createAction(
  '[Posts/API] Search Failure',
  props<{ errorMsg: string }>()
);
