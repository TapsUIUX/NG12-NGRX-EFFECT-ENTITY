import { createAction, props } from '@ngrx/store';
import { post_i } from './post-store.model';

export const loadPosts = createAction(
  '[Origin : Post Page Container] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Origin : Post Effect] Posts Success',
  props<{ posts: post_i[] }>()
);

export const loadPostsFailure = createAction(
  '[Origin : Post Effects] Posts Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Origin : Post Page Container] Post Delete',
  props<{ id: number }>()
);
