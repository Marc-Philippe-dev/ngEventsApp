import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule,ReactiveFormsModule} from "@angular/forms";

import { userRoutes } from "./user.routes";
import {
    LoginComponent,
    ProfileComponent,
} from './index'
 


@NgModule({
    imports : [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers:[
     
    ]
})

export class UserModule{

}