import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'events-thumbails',
    template:  `
    <div [routerLink]="['/events',event.id]" class="well">
        <h2> Name: {{event.name}} </h2>
        <h2> Price: \${{event.price}} </h2>
        <div *ngIf="event?.location">
            <span>Location: {{event.location.name}}</span>
        </div>
    </div>
    <button class="btn btn-primary" (click)="handleClickMe()">Click Me</button>`,
    styles: [`
        .well div { color: #bbb; }
    `]
})

export class EventThumbailsComponent{
    @Input() event:any
    @Output() eventClick = new EventEmitter()
    someValue:any = "some value"

    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }
    
    logFoo(){
        console.log('foo')
    }
} 