import { Injectable } from '@angular/core'

@Injectable()
export class EventService {
    getEvents(){
        return EVENTS
    }

    getEvent(id:number){
        return EVENTS.find(event => event.id === id)
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