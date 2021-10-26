import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () =>
      import('./PAGES/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'posts-page',
    loadChildren: () =>
      import('./PAGES/posts-page/posts-page.module').then(
        (m) => m.PostsPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
