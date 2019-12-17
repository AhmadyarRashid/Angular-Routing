import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';


@NgModule({
  declarations: [ArticlesComponent, ArticlesDetailsComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
