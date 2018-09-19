import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbailsComponent } from './events/event-thumbails.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavbarComponent } from './nav/navbar.component';


import { EventService  } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activate.service';
import { EventListResolver } from './events/event-list-resolver.component';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    NavbarComponent,
    EventThumbailsComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator, EventListResolver],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
