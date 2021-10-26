import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { post_i } from '../post-store/post-store.model';
import * as fromHomeActions from './home-store.actions';

export const homeStoreFeatureKey = 'homeStore';

export interface HomeState_i extends EntityState<post_i> {}

export const homeStateAdapter: EntityAdapter<post_i> =
  createEntityAdapter<post_i>({
    selectId: (item) => '' + item.id, //need to be string so type casted
  });

export const initialState: HomeState_i = homeStateAdapter.getInitialState({});

export const HomeStoreReducer = createReducer(
  initialState,
  on(fromHomeActions.loadHomeStoreSuccess, (state: HomeState_i, action) =>
    homeStateAdapter.setAll(action.posts, state)
  ),
  on(fromHomeActions.DeleteOne, (state: HomeState_i, action) =>
    homeStateAdapter.removeOne(action.id, state)
  )
);
/** collections
addOne: Add one entity to the collection.
addMany: Add multiple entities to the collection.
setAll: Replace current collection with provided collection.
setOne: Add or Replace one entity in the collection.
setMany: Add or Replace multiple entities in the collection.
removeOne: Remove one entity from the collection.
removeMany: Remove multiple entities from the collection, by id or by predicate.
removeAll: Clear entity collection.
updateOne: Update one entity in the collection. Supports partial updates.
updateMany: Update multiple entities in the collection. Supports partial updates.
upsertOne: Add or Update one entity in the collection. Supports partial updates.
upsertMany: Add or Update multiple entities in the collection. Supports partial updates.
mapOne: Update one entity in the collection by defining a map function.
map: Update multiple entities in the collection by defining a map function, similar to Array.map.
     */
