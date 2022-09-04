import { NgIfContext } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from 'src/app/shared';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [

    ` .typo{
      padding:2rem;
      color: #F5ECEC;
       background-color:#A9A9A9;
       border-radius:1rem;
    }
      .grid-container{
        width:90vw;
        margin:0px auto 40px auto;
      }

      img{
        width:150px;
        height:150px;
        margin:0 auto;
        margin-bottom:0.5rem;
      }

      @media screen and (min-width: 668px){
        .grid-container{
          display:grid;
          grid-template-columns: repeat(2,1fr)
        }
        
        img{
          display:inline;
        }
        .event-img{
          grid-row:1 / span 2;
        }
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
event :IEvent | undefined;
addMode = false;
filterBy : string = "all"
sortBy : string = "votes"

  constructor(private eventService: EventService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.data.forEach((data ) =>{
    this.event = data['event']
   })
  }

addSession(){
  this.addMode = true;
}

cancelAddSession(){
  this.addMode = false;
}

saveNewSession(session){
  const nextId = Math.max.apply(null, this.event?.sessions.map(s => s.id) as number[])

  session.id = nextId + 1;
  this.event?.sessions.push(session);
  this.eventService.saveEvent(this.event);
  this.addMode = false;
}
}
