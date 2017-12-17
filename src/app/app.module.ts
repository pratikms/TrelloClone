import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardDetailComponent } from './board-detail/board-detail.component'
import { BoardService } from './services/board.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simmulated server responses
    // Remove it when a realm server is ready to receive requests
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    BoardService//,
    //MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
