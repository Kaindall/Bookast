import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UploadComponent } from "./components/upload/upload.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

import { BooksService } from "./services/books.service";
import { AnimationComponent } from "./components/animation/animation.component";

@NgModule({
    declarations: [HomeComponent, UploadComponent, LoginComponent, SignupComponent, NavbarComponent, AnimationComponent],
    imports: [PublicRoutingModule, FormsModule, CommonModule],
    providers: [BooksService]
})

export class PublicModule {}