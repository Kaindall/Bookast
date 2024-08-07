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

@NgModule({
    declarations: [HomeComponent, UploadComponent, LoginComponent, SignupComponent, NavbarComponent],
    imports: [PublicRoutingModule, FormsModule, CommonModule],
    providers: [BooksService]
})

export class PublicModule {}