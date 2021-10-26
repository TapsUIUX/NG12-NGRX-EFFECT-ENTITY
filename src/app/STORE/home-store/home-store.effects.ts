import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { PostsService } from 'src/app/SERVICES/posts.service';
import { fromHomeActions } from '.';
import { post_i } from '../post-store/post-store.model';

@Injectable()
export class HomeStoreEffects {
  constructor(
    private actions$: Actions,
    private _postServ: PostsService,
    private _store: Store
  ) {}
  loadPosts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromHomeActions.loadHomeStore),
        tap((action) => {
          this._postServ.getPosts().subscribe((resp: post_i[]) => {
            this._store.dispatch(
              fromHomeActions.loadHomeStoreSuccess({ posts: resp })
            );
          });
        })
      ),
    { dispatch: false }
  );
}
