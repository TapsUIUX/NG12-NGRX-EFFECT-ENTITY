import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post-store.effects';
import { postStoreReducer, postStoreFeatureKey } from './post-store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(postStoreFeatureKey, postStoreReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
})
export class PostStoreModule {}
