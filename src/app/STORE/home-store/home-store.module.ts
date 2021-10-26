import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeStoreFeatureKey, HomeStoreReducer } from './home-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(homeStoreFeatureKey, HomeStoreReducer),
    EffectsModule.forFeature([]),
  ],
})
export class HomeStoreModule {}
