import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: 'boards', component: BoardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
