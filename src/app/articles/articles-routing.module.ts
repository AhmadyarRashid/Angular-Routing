import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticlesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
