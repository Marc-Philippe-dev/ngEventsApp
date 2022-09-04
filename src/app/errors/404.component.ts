import { Component} from '@angular/core';

@Component({
  template:'<h1 class="error-message">Oups!!!! Something went wrong. Resource not found.</h1>',
  styles: [
    `
    .error-message {
        color:gray;
        text-align: center;
        font-size:4rem;
        margin:2rem;
    }
    `
    ]
})

export class Error404Component{

}