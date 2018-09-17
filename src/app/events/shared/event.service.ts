import { Injectable } from '@angular/core'

@Injectable()
export class EventService {
    getEvents(){
        return EVENTS
    }
}

const EVENTS = [{
    name: 'Angular',
    price: 2093
},{
    name: 'Angular2',
    price: 20,
    location:{
        name: 'Gualeguay'
    }
}]