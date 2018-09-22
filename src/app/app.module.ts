import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventThumbailsComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver

} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';

import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';


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
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator, 
    EventListResolver,
    AuthService
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule { }
