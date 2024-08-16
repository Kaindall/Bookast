import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-animated',
    template: `
        <h3>Click the button to change its color!</h3>
        <button (click)="toggleIsCorrect()" [@toggleClick]="isGreen">Toggle Me!</button>`,
    animations: [
        trigger('toggleClick', [
            state('true', style({backgroundColor: 'green'})),
            state('false', style({backgroundColor: 'red'})),
            transition('true => false', animate('1000ms linear')),
            transition('false => true', animate('1000ms linear'))
        ])
    ]
})
export class AnimationComponent {
  isGreen: string = 'true';

  toggleIsCorrect() {
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
  }
}