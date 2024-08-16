import { Component } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css"
})

export class NavbarComponent {
    loginOpen: boolean = false;
    loginAnimation: string = 'closed';

    toggleLogin() {
        if(this.loginOpen) {
            this.loginAnimation = 'close';
            setTimeout(()=> {
                this.loginOpen = false;
            }, 1000)
            return
        }

        this.loginOpen = true;
        this.loginAnimation = 'open';
    } 
    
}