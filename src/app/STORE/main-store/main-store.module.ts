import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../post-store/post-store.effects';
import { PostStoreModule } from '../post-store/post-store.module';
import { HomeStoreModule } from '../home-store/home-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HomeStoreEffects } from '../home-store/home-store.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostStoreModule,
    HomeStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([PostEffects, HomeStoreEffects]),
  ],
})
export class MainStoreModule {}
