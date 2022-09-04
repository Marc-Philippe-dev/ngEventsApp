import { Component, Input } from "@angular/core";

@Component({
    selector:'collapsible', 
    template:`
    <div (click)="toggleContent()" class="cursor-pointer">
        <div>
           <ng-content select="[title]"></ng-content>
        </div>
        <ng-content *ngIf="visible" select="[body]"></ng-content>
    </div>
    `
})

export class CollapsibleComponent{
@Input() title: string
visible = true;

toggleContent(){
    this.visible = !this.visible;
}

}