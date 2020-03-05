import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPosts from '../reducers/posts.reducer';

export const selectPostsState = createFeatureSelector<fromPosts.PostState>(
  fromPosts.postsFeatureKey
);

export const getPosts = createSelector(
  selectPostsState,
  state => state.posts
);

/*import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromPost from './posts.reducer';

export interface State {
    posts: fromPost.State;
}

export const reducers: ActionReducerMap<State> = {
    posts: fromPost.postReducer,
};

export const selectPostState = createFeatureSelector<fromPost.State>('posts');

export const selectAllPosts = createSelector(
    selectPostState,
    fromPost.selectAllPosts
);*/