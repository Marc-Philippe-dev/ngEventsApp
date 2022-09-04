import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent ,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  LocationValidator,
  EventListResolver ,
  EventResolver,
  DurationPipe,
  EventService,
  AuthService,
  VoterService
} from './index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';

import { TOASTR_TOKEN, Toastr} from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component} from "./errors/404.component";
import {  } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleComponent } from './common/collapsible.component';

let toastr:Toastr = window['toastr']
 
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    SessionListComponent,
    CreateEventComponent,
    CreateSessionComponent,
    CollapsibleComponent,
    UpvoteComponent,
    Error404Component,
    DurationPipe, 
    LocationValidator
  ],
  providers: [
    EventService,
    AuthService,
    VoterService,
    EventListResolver,
    EventResolver,
    {provide:TOASTR_TOKEN , useValue:toastr}, 
    {provide: 'canDeactivateCreateEvent' , useValue:checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){

  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to leave?');
  }
  return true;
}