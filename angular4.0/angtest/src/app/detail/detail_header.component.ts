import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'detailHeader',
    templateUrl: './detail_header.component.html',
    inputs: ['detail']
})

export class DetailHeaderComponent {
    private detail;
}
