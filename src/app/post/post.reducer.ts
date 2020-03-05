import { Action, createReducer, on } from '@ngrx/store';
import { getAllPosts, getAllPostsSuccess } from './post.actions';
import { Post } from './post.model';


export const postFeatureKey = 'posts';

export interface PostState {
    posts: Post[];
}
export const initialState : PostState = {
    posts: null
};

const _postReducer = createReducer(
    initialState,
    on(getAllPosts, state => ({...state})),    
    on(getAllPostsSuccess, (state, {posts}) => ({
        ...state, 
        posts
    }),    
));

export function postReducer(state: PostState | undefined, action: Action){
    return _postReducer(state, action);
}