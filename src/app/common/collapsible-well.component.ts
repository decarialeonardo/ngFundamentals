import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toogleContent()" class="well pointable">
        <h4 class="well-title">{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    </div>
    `
})
export class CollapsibleWellComponent implements OnInit {
    @Input() title:string;
    visible: boolean = true;
    constructor() { }

    ngOnInit(): void { }

    toogleContent(): void{
        this.visible = !this.visible;
    }
}
