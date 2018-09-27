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
        event.sessions = []
        EVENTS.push(event)
    }
}

const EVENTS = [{
    id: 1,
    name: 'Angular',
    price: 2093,
    sessions: [{
        id: 1,
        name: "leonardo with angular",
        presenter: "Leonardo",
        duration: 2,
        level: 'beginner',
        abstract: 'prueba1',
        voters: [1,2,3,4]
    },{
        id: 2,
        name: "Aleonardo with angular 2",
        presenter: "Leonardo 2",
        duration: 3,
        level: 'intermediate',
        abstract: 'prueba2',
        voters: [1,2]
    }]
    
},{
    id: 2,
    name: 'Angular2',
    price: 20,
    location:{
        name: 'Gualeguay'
    }
}]