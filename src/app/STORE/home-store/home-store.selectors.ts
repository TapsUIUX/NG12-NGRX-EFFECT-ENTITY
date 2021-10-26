import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState_i } from './home-store.reducer';

export const postState = createFeatureSelector<HomeState_i>('homeStore');

export const getAllHomePost_s = createSelector(postState, (allPosts) => {
  return Object.values(allPosts.entities);
});
