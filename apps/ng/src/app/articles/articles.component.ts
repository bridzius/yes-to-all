import { Component } from '@angular/core';
import { AsyncPipe, KeyValuePipe, NgFor } from '@angular/common';
import { ArticlesService } from '../articles.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'yes-to-all-articles',
  standalone: true,
  imports: [KeyValuePipe, NgFor, AsyncPipe, RouterLinkWithHref],
  template: ` <article
    [routerLink]="article.key"
    [id]="article.key"
    *ngFor="let article of articles$ | async | keyvalue"
    [innerHTML]="article.value"
  ></article>`,
})
export default class ArticlesComponent {
  articles$ = this.articlesService.fetchArticles();
  constructor(private articlesService: ArticlesService) {
    console.log('articles');
  }
}
