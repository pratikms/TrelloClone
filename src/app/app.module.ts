import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardService } from './services/board.service';
import { AppRoutingModule } from './/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BoardService//,
    //MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
