import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'yes-to-all-article',
  standalone: true,
  imports: [AsyncPipe],
  template: `<article [innerHTML]="article$ | async"></article>`,
  styles: [],
})
export default class ArticleComponent {
  article$ = this.route.params.pipe(
    switchMap((params: Params) => this.articlesService.getArticle(params['id']))
  );
  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {}
}
