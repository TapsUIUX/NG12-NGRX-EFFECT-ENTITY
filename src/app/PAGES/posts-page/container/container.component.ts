import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromPostActions from '../../../STORE/post-store/post-store.actions';
import * as fromPostSelectors from '../../../STORE/post-store/post-store.selectors';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  allThePosts: any = [];
  constructor(private _store: Store) {}
  subs: any = new Subject();
  ngOnInit(): void {
    this._store
      .select(fromPostSelectors.getAllPost_s)
      .pipe(takeUntil(this.subs))
      .subscribe((response) => {
        ///console.log('response', response);
        this.allThePosts = response;
        if (response.length == 0) {
          this._store.dispatch(fromPostActions.loadPosts());
        }
      });
  }
  onUpdatePost(todo: string, id: number) {
    if (todo == 'd') {
      this._store.dispatch(fromPostActions.deletePost({ id: id }));
    }
  }

  ngOnDestroy() {
    this.subs.next();
    this.subs.complete();
  }
}
