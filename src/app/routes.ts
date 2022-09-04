import { Routes } from "@angular/router";
import {
    EventDetailsComponent ,
    EventResolver ,
    CreateEventComponent,
    EventListResolver ,
    EventListComponent,
    CreateSessionComponent
} from './index'

import { Error404Component } from "./errors/404.component";
 

export const appRoutes : Routes = [
    {path:'events/new' , component:CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component: EventListComponent, resolve : {events : EventListResolver}},
    {path:'events/:id', component: EventDetailsComponent , resolve : {event : EventResolver}}, 
    {path:'', redirectTo:'/events', pathMatch:"full"},
    {path:'404' , component:Error404Component}, 
    {path:'session' , component:CreateSessionComponent}, 
    {
     path:'user' ,
     loadChildren : () => import('./user/user.module')
     .then(m => m.UserModule)
      }
] 