import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'topstory',
    templateUrl: './topstory.component.html'
})
export class TopStoryComponent {
    private list: Array<any>;

    constructor(private http: Http) {

    }

    ngOnInit() {
        this.http.get('http://localhost:8090/list?page=0').forEach(res => {
            this.list = res.json();
        });
    }
}
