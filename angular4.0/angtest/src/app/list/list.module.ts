import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QLComponent } from './list.component';
import { SideBarComponent } from './side_bar.component';
import { TopStoryComponent } from './topstory.component';
import { BtnGroupComponent } from './btn_group.component';
import { TopStoryItemComponent } from './topstory_item.component';
import { LinksComponent } from './links.component';
import { PanelComponent } from './panel.component';

import { humanNumberPipe } from '../pipes/humanNumber';

@NgModule({
    declarations: [
        QLComponent,
        SideBarComponent,
        TopStoryComponent,
        BtnGroupComponent,
        TopStoryItemComponent,
        LinksComponent,
        PanelComponent,
        humanNumberPipe
    ],
    imports: [
        BrowserModule
    ],
    exports: [QLComponent],
    providers: [],
    bootstrap: [QLComponent]
})
export class ListModule { }