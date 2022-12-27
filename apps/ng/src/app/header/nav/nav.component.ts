import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'yes-to-all-nav',
  standalone: true,
  imports: [RouterLinkWithHref],
  template: `<nav>
    <ul>
      <li><a routerLink="/">Home</a></li>
    </ul>
  </nav>`,
})
export class NavComponent {}
