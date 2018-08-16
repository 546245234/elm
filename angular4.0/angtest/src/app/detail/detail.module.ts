import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DetailComponent } from './detail.component'
import { DetailHeaderComponent } from './detail_header.component';
import { DetailSlideComponent } from './detail_slide.component';
import { DetailMainComponent } from './detail_main.component';
import { DetailMoreComponent } from './detail_more.component';
import { DetailBestComponent } from './detail_best.component';
import { DetailAnswerComponent } from './detail_answer.component';
import { thousandPipe } from '../pipes/thousand';

@NgModule({
    declarations: [
        DetailComponent,
        DetailHeaderComponent,
        DetailSlideComponent,
        DetailMainComponent,
        DetailMoreComponent,
        DetailBestComponent,
        DetailAnswerComponent,
        thousandPipe
    ],
    imports: [
        BrowserModule
    ],
    exports: [DetailComponent],
    providers: [],
    bootstrap: [DetailComponent]
})
export class DetailModule { }
