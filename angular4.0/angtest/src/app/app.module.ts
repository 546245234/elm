import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FootComponent } from './foot.component';

import { ListModule } from './list/list.module';
import { QLComponent } from './list/list.component';

import { DetailModule } from './detail/detail.module';
import { DetailComponent } from './detail/detail.component';

const routes:Routes = [
  { path: '', component: QLComponent },
  {path:'list',component:QLComponent},
  {path:'detail/:id',component:DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ListModule,
    DetailModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
