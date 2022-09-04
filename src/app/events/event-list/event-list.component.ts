 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IEvent } from 'src/app/shared';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-event-list',
  template: `
     <div class="px-10 text-slate-100 ">
        <h1 class="p-5 font-serif text-lg text-gray-600 md:text-3xl">Upcoming Angular Events</h1>
        <hr>
        <div class="p-5 grid-container" *ngIf="events">
          <app-event-thumbnail *ngFor ="let event of events" [event]="event" 
          ></app-event-thumbnail>
        </div>
        
     </div> 
  `,
  styles: [
    `

    @media screen and (min-width: 768px){
    .grid-container{
        display:grid;
        gap:0 1rem;
        grid-template-columns: repeat(2,1fr);
      }
    }
    `
  ] 
})

export class EventListComponent implements OnInit {
 events :IEvent[] = [];

  constructor(private eventService : EventService , private route : ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
      
  }
 
}


 
