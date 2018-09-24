import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared';

@Component({
    selector: 'create-event',
    templateUrl:  './create-event.component.html',
    styles: [`
        .well div { color: #bbb; }
        em { float: left; color:red; padding-left: 10px;}
        .error input { background-color: red }
    `]
})

export class CreateEventComponent{
    newEvent
    constructor(private router:Router,private eventService:EventService){

    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
    
} 