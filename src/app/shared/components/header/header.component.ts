import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public title: string = 'weather';

  constructor(
  ) {
    this.title = window.location.pathname.substring(1);
  }
}
