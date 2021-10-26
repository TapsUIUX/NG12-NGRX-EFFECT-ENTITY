import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { ContainerComponent } from './container/container.component';
import { LifeCycleComponent } from '../../COMPONENTS/life-cycle/life-cycle.component';

@NgModule({
  declarations: [ContainerComponent, LifeCycleComponent],
  imports: [CommonModule, HomePageRoutingModule],
})
export class HomePageModule {}
