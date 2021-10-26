import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './STORE/post-store/post-store.effects';
import { HttpClientModule } from '@angular/common/http';
import { PostStoreModule } from './STORE/post-store/post-store.module';
import { MainStoreModule } from './STORE/main-store/main-store.module';
@NgModule({
  declarations: [AppComponent],

  providers: [Store],
  bootstrap: [AppComponent],
  imports: [MainStoreModule, BrowserModule, AppRoutingModule, HttpClientModule],
})
export class AppModule {}
