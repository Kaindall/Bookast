import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { UploadComponent } from "./components/upload/upload.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Bookast' },
    { path: 'upload', component: UploadComponent, data: { animation: 'zoomInFadeOut' } },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PublicRoutingModule {}