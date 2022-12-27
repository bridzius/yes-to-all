import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  selector: 'yes-to-all-root',
  template: ` <yes-to-all-header></yes-to-all-header>
    <router-outlet></router-outlet>`,
  styles: [''],
})
export class AppComponent {}
