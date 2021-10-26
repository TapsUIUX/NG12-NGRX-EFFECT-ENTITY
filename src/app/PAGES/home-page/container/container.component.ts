import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromHomeActions from '../../../STORE/home-store/home-store.actions';
import * as fromHomeSelectors from '../../../STORE/home-store/home-store.selectors';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  allThePosts: any = [];
  valueThatChages: number = 0;
  constructor(private _store: Store) {}
  subs: any = new Subject();
  ngOnInit(): void {
    this._store
      .select(fromHomeSelectors.getAllHomePost_s)
      .pipe(takeUntil(this.subs))
      .subscribe((response) => {
        //console.log('response ::: ', response);
        this.allThePosts = response;
        if (response.length == 0) {
          this._store.dispatch(fromHomeActions.loadHomeStore());
        }
      });
  }
  onUpdatePost(todo: string, id: number) {
    if (todo == 'd') {
      this._store.dispatch(fromHomeActions.DeleteOne({ id: id }));
    }
  }
  onIncrement() {
    this.valueThatChages++;
  }
  ngOnDestroy() {
    this.subs.next();
    this.subs.complete();
  }
}
