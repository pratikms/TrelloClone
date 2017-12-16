import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Board } from '../board';
import { BOARDS } from '../mock-boards';

@Injectable()
export class BoardService {

  constructor() { }

  getBoards(): Observable<Board[]> {
    return of(BOARDS);
  }

  addBoard(board: Board, boards: Board[]): Observable<Board[]> {
    boards.push(board);
    return of(boards);
  }

}
