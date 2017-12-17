import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';

const routes: Routes = [
  { path: 'boards', component: BoardComponent },
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'board/:id', component: BoardDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
