import { Component, Input } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    @Input() entry: Entry;
    // title: string = "This is great";
    // photo: string = "http://placehold.it/800x500?text=angular basic";
    // description: string = "A description";
    // comments: any[] = [
    //     {name: "user1 ", comment: "comment1"},
    //     {name: "user2 ", comment: "comment2"},
    //     {name: "user3 ", comment: "comment3"},
    //     {name: "user4 ", comment: "comment4"}

    // ]
}