import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPosts from './post.reducer';

export const selectPostsState = createFeatureSelector<fromPosts.PostState>(
  fromPosts.postFeatureKey
);

export const getPosts = createSelector(
  selectPostsState,
  state => state.posts
);

