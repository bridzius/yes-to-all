import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of, tap } from 'rxjs';

export type Articles = {
  [id: string]: string;
};

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private _articles: Articles = {};
  constructor(private httpClient: HttpClient) {}

  fetchArticles() {
    console.log('Fetching Articles');
    return this.httpClient
      .get<Articles>(
        'https://raw.githubusercontent.com/bridzius/bridzius.github.io/master/articles.json'
      )
      .pipe(tap((articles) => (this._articles = articles)));
  }

  getArticle(id: string) {
    return (
      !Object.keys(this._articles).length
        ? this.fetchArticles().pipe()
        : of(this._articles)
    ).pipe(map((articles) => articles[id]));
  }
}
