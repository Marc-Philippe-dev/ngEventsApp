import { Component, OnInit , Inject} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TOASTR_TOKEN , Toastr } from "../common/toastr.service";
import { AuthService } from "./auth.service";

@Component({
    templateUrl:'profile.component.html',
    styles:[`
    em{ float:right; color:#E05C65 ; padding-left:10px;}
    .error input{background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999}
    .error ::-moz-placeholder{color:#999}
    .error :-moz-placeholder{color:#999}
    .error :ms-input-placeholder{color:#999}
  `] 
})

export class ProfileComponent implements OnInit{
profileForm ;
firstName;
lastName

    constructor(private auth: AuthService , private router : Router ,  @Inject(TOASTR_TOKEN) private toastr : Toastr){

        this.firstName = new FormControl(this.auth.currentUser.firstName , [Validators.required , Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(this.auth.currentUser.lastName , [Validators.required ,  Validators.pattern('[a-zA-Z].*')]);
        
        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
     
    }   

    ngOnInit(){
    }
    
    saveProfile(formValues){
       
        this.auth.updateCurrentUser(formValues.firstName , formValues.lastName)
        .subscribe(()=>{
            this.toastr.success('Profile saved');
        })
    }
    
    logout(){
        this.auth.logout().subscribe(()=>{
          this.router.navigate(['/user/login'])
        });
    }

    cancel(){
        this.router.navigate(['/events']);
    }

    validateFirstName(){
        return   this.firstName.valid || this.firstName.untouched
    }

    validatelastName() {
        return this.lastName.valid || this.lastName.untouched
    }
}