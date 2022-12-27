import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withDebugTracing } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./app/articles/articles.component'),
  },
  {
    path: ':id',
    loadComponent: () => import('./app/article/article.component'),
  },
  { path: '**', redirectTo: '' },
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes, withDebugTracing())],
}).catch((err) => console.error(err));
