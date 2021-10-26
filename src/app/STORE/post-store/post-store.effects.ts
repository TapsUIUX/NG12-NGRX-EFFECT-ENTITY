import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromPostActions from './post-store.actions';
import { take, tap } from 'rxjs/operators';
import { PostsService } from '../../SERVICES/posts.service';
import { Store } from '@ngrx/store';
import { post_i } from './post-store.model';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private _postServ: PostsService,
    private _store: Store
  ) {}
  loadPosts$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromPostActions.loadPosts),
        tap((action) => {
          this._postServ.getPosts().subscribe((resp: post_i[]) => {
            this._store.dispatch(
              fromPostActions.loadPostsSuccess({ posts: resp })
            );
          });
        })
      ),
    { dispatch: false }
  );
}
