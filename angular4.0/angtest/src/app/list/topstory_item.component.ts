import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'topstory-item',
    templateUrl: './topstory_item.component.html',
    inputs:['data']
})

export class TopStoryItemComponent {
    private showContent = false;
    private data;

    constructor() {

    }

    fnShowContent() {
        this.showContent = true;
    }

    ngOnInit() {

    }
}
