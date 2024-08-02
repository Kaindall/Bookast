import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <app-navbar *ngIf="showNavbar"/>
    <router-outlet />`
})

export class AppComponent {
  public showNavbar: boolean = true;
}
