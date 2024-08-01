import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./home/home.component";
import { UploadComponent } from "./upload/upload.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [HomeComponent, UploadComponent, LoginComponent, SignupComponent],
    imports: [PublicRoutingModule, SharedModule, FormsModule]
})

export class PublicModule {}