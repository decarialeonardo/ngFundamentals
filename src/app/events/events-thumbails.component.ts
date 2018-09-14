import { Component, Input } from '@angular/core'

@Component({
    selector: 'events-thumbails',
    template:  `
    <div>
        <h2> Name: {{event.name}} </h2>
        <h2> Price: \${{event.price}} </h2>
    </div>`
})

export class EventsThumbailsComponent{
    @Input() event:any
}