import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [HomeComponent, AboutComponent, ContactComponent, LoginComponent, SignupComponent],
    imports: [PublicRoutingModule, SharedModule]
})

export class PublicModule {}