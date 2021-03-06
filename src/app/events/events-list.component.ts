import { Component, OnInit } from '@angular/core'
import { NgForOf } from '@angular/common';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'events-list',
    template:  `
    <div>
        <h1> Upcoming Events </h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <events-thumbails (click)="handleEventClicked(event.name)" [event] = "event"></events-thumbails>
            </div>
        </div>
    </div>`
})

export class EventsListComponent implements OnInit{
    events:any[]

    constructor(private eventService:EventService, private toastrService:ToastrService, private route:ActivatedRoute){
        
    }

    ngOnInit(){
        //this.events = this.eventService.getEvents();
        this.events = this.route.snapshot.data['events']
    }

    handleEventClicked(eventName){
        this.toastrService.success(eventName);
    }
}