import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'yes-to-all-header',
  standalone: true,
  imports: [NavComponent],
  styles: [],
  template: `<h1>bridzius.lt</h1>
    <yes-to-all-nav></yes-to-all-nav> `,
})
export class HeaderComponent {}
