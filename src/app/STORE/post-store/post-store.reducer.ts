import { Action, createReducer, on } from '@ngrx/store';
import * as fromPostAction from './post-store.actions';
import { post_i } from './post-store.model';

export const postStoreFeatureKey = 'postStore';

export interface PostState_i {
  posts: post_i[];
}

export const initialState: PostState_i = {
  posts: [],
};

export const postStoreReducer = createReducer(
  initialState,
  on(
    fromPostAction.loadPostsSuccess,
    (state: PostState_i, action): PostState_i => ({
      ...state,
      posts: action.posts,
    })
  ),
  on(fromPostAction.deletePost, (state: PostState_i, action) => ({
    ...state,
    posts: state.posts.filter((el) => el.id != action.id),
  }))
);
