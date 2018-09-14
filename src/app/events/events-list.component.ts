import { Component } from '@angular/core'
import { NgForOf } from '@angular/common';

@Component({
    selector: 'events-list',
    template:  `
    <div>
        <h1> Upcoming Events </h1>
        <hr>
        <events-thumbails #thumbail (eventClick)="handleEventClicked($event)" *ngFor="let event of events" [event] = "event"></events-thumbails>
        <h3>{{thumbail.someValue}}</h3>
        <button class="btn btn-primary" (click)="thumbail.logFoo()">Log me some foo</button>
    </div>`
})

export class EventsListComponent{
    events = [{
        name: 'Angular',
        price: 2093
    }]

    handleEventClicked(data){
        console.log(data)
    }
}