import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { UploadComponent } from "./components/upload/upload.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { BooksService } from "./services/books.service";

@NgModule({
    declarations: [HomeComponent, UploadComponent, LoginComponent, SignupComponent],
    imports: [PublicRoutingModule, SharedModule, FormsModule, CommonModule],
    providers: [BooksService]
})

export class PublicModule {}