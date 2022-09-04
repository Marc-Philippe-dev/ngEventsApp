import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'src/app/shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styles:[
    `
    .green{color:#003300 !important}
    .bold{font-weight:bold}
    `
  ]
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:IEvent | undefined ;
  
  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass(){
    const isEarlyStart = this.event && this.event.time === '8:00 am' 

    return {
      green: isEarlyStart ,
      bold:isEarlyStart
    }
  }

  
}
