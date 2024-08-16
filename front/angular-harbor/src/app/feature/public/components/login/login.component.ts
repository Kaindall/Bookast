import { Component, Input } from "@angular/core";

import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

@Component({
    selector: "app-login",
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    animations: [
        trigger('toggleLogin', [
            transition(':enter', animate('.5s ease-in-out', keyframes([
                style({opacity: '0', height: '0px', offset: 0}),
                style({opacity: '1', height: '400px', offset: 1})
                ]))
            ),
            state('close', style({opacity: '0', height: '0px', offset: 0})),
            transition('open => close', animate('.5s'))
        ])
        /* trigger('toggleLogin', [
            transition(':enter', animate('.5s ease-in-out', keyframes([
                    style({opacity: '0', height: '0px', offset: 0}),
                    style({opacity: '1', height: '400px', offset: 1})
                ]))
            ),
            transition('close', animate('.5s ease-in-out', keyframes([
                style({opacity: '1', height: '400px', offset: 0}),
                style({opacity: '0', height: '0px', offset: 1})
            ]))
        )
        ]) */
    ]
})

export class LoginComponent {
    @Input() loginAnimation: string = 'open';
}