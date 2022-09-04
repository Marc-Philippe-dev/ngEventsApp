import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'upvote',
    template:`
         <div class=" bg-gray-300 votingWidgetContainer cursor-pointer rounded-xl " (click)="onClick()">
        <div class="votingWidget">
            <div class="votingButton">
                <i  class="fa-solid fa-heart" [style.color]= "iconColor" ></i>
            </div>
            <div class="votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    </div>
    `,
     styleUrls: ['upvote.component.scss']
})

export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val){
        this.iconColor = val ? "red" : "white";
    } 
    @Output() vote  = new EventEmitter();
    iconColor:string;

    onClick(){
        this.vote.emit();
    }
 }