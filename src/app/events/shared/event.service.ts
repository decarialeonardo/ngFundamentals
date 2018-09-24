import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class EventService {

    getEvents(){
        let subject = new Subject();
        setTimeout(() => { subject.next(EVENTS); subject.complete(); }, 100)
        
        return subject
        //return EVENTS
    }

    getEvent(id:number){
        return EVENTS.find(event => event.id === id)
    }

    saveEvent(event){
        event.id = 99999
        EVENTS.push(event)
    }
}

const EVENTS = [{
    id: 1,
    name: 'Angular',
    price: 2093
},{
    id: 2,
    name: 'Angular2',
    price: 20,
    location:{
        name: 'Gualeguay'
    }
}]