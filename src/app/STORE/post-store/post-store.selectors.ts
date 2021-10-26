import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState_i } from './post-store.reducer';

export const postState = createFeatureSelector<PostState_i>('postStore');

export const getAllPost_s = createSelector(postState, (allPosts) => {
  return allPosts.posts;
});
