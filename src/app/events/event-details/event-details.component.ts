import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'event-details',
    templateUrl:  './event-details.component.html',
    styles: [``]
})

export class EventDetailsComponent implements OnInit{
    event:any
    constructor(private eventService:EventService, private route:ActivatedRoute){

    }

    ngOnInit(){
        // + cast to number
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
} 