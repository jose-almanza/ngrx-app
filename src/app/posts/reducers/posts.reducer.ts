import {Action, createReducer, on} from '@ngrx/store';
import { loadPosts } from '../actions/posts.actions';
import { searchFailure, searchSuccess } from '../actions/posts-api.actions';
import {Post} from '../models/posts.model';

export const postsFeatureKey = 'posts';

export interface PostState {
  posts: Post[];
  error: string;
}

export const initialState: PostState = {
  posts: null,
  error: null
};

const postsReducer = createReducer(
  initialState,
  on(loadPosts, state => ({
    ...state
  })),
  on(searchSuccess, ({posts}) => ({        
    posts
  })),
  on(searchFailure),
);

export function reducer(state: PostState | undefined, action: Action) {
  return postsReducer(state, action);
}



/*import { Action, createReducer, on} from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as PostsActions from '../actions/posts.actions';
import { Post } from '../models/posts.model';


export interface State extends EntityState<Post>{}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const initialState = adapter.getInitialState();

export const postsFeatureKey = 'books';

const _postReducer = createReducer (
    initialState,
    on(PostsActions.loadPosts, (state, { posts }) => {
        return adapter.addAll(posts, state);
    }),
);

export function postReducer(state: State | undefined, action: Action){
    return _postReducer(state, action);
}

const { selectAll } = adapter.getSelectors();

const postArray = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },    
  ]
export const selectAllPosts = selectAll;*/