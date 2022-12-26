import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Articles = {
  [id: string]: string;
};

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  fetchArticles() {
    return this.httpClient.get<Articles>(
      'https://raw.githubusercontent.com/bridzius/bridzius.github.io/master/articles.json'
    );
  }
}
