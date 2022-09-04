import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    
    `
    .logo{
      height:25px;
    }
    .search-section , .nav-section , .auth-section{
      display: none;
    }
    a.active{
      color:#F97924;
    }

    li>a:hover{
      color:blue;
    }
    @media screen and (min-width:900px){
     
      .toogle{
        display: none;
      }
      .search-section , .nav-section {
        display:block;
      }

      .nav-section{
        flex-basis:30%;
      }

      .auth-section{
        display:flex;
        justify-content:space-around;
        flex-basis:30%;
      }

      .btn{
        padding:0.5rem 0.75rem;
        border: 1px white solid; 
        border-radius:0.5rem;
      }
    }
    `
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
    
  }

}
