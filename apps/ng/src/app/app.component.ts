import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';
import { AsyncPipe, KeyValuePipe, NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  imports: [KeyValuePipe, NgFor, AsyncPipe, HeaderComponent],
  selector: 'yes-to-all-root',
  template: ` <yes-to-all-header></yes-to-all-header>
    <article
      id="{{ article.key }}"
      *ngFor="let article of articles$ | async | keyvalue"
      [innerHTML]="article.value"
    ></article>`,
  styles: [''],
})
export class AppComponent {
  articles$ = this.articlesService.fetchArticles();
  constructor(private articlesService: ArticlesService) {}
}
