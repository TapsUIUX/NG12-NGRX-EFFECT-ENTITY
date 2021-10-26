import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageRoutingModule } from './posts-page-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, PostsPageRoutingModule],
})
export class PostsPageModule {}
