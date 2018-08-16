import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'detailMain',
    templateUrl: './detail_main.component.html',
    inputs: ['detail']
})

export class DetailMainComponent {
    private detail;
}
