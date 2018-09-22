import { Component, Injectable } from '@angular/core'
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html' ,
    styles: [
        `li > a.active { color: #F97924; }`
    ]
})

@Injectable()
export class NavbarComponent{
    constructor(private auth:AuthService){

    }
}