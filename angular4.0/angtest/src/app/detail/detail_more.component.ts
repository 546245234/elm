import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'detailMore',
    templateUrl: './detail_more.component.html',
    inputs: ['detail']
})

export class DetailMoreComponent {
    private detail;
}
