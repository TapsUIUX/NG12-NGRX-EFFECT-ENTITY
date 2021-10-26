import { createAction, props } from '@ngrx/store';
import { post_i } from '../post-store/post-store.model';

export const loadHomeStore = createAction('[Home Page] Load Home Posts');

export const loadHomeStoreSuccess = createAction(
  '[Home Effect] Load Home Post Success',
  props<{ posts: post_i[] }>()
);

export const loadHomeStoreFailure = createAction(
  '[HomeStore] Load Home Post Failure',
  props<{ error: any }>()
);

export const DeleteOne = createAction(
  '[HomeStore] Deleate One From Home Store',
  props<{ id: any }>()
);
