import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template:  `
    <div>
        <h1> Upcoming Events </h1>
        <hr>
        <events-thumbails [event] = "event1"></events-thumbails>
    </div>`
})

export class EventsListComponent{
    event1 = {
        name: 'Angular',
        price: 2093
    }
}