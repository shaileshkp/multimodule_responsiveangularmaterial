import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login.routing.module'
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        LoginComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [LoginRoutingModule]
})

export class LoginModule { }