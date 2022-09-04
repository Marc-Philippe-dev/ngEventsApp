import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
 
@Component({
    templateUrl: 'login.component.html',
    styles : [
        `
        em{
            display:block; float:right; color:#E05C65; padding-left:10px;
        }

        `
    ]
})

export class LoginComponent {
    userName: string;
    password: string;
    mouseoverLogin
    loginInvalid = false;

    constructor(private auhtService: AuthService, private router : Router,
         ) {

    }

    login(formValues: { userName: string; password: string; }) {
        this.auhtService.loginUser(formValues.userName, formValues.password).subscribe(resp =>{
            if(!resp){
                this.loginInvalid = true;
            }
            else{

                this.router.navigate(['/events']);
            }
        }); 
    }

    cancel() {

        this.router.navigate(['/events']);
    }
}