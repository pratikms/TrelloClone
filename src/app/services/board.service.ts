import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../board';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class BoardService {

  private boardsUrl = 'api/boards';

  constructor(
    private http: HttpClient
  ) { }

  /** GET boards from the server */
  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardsUrl)
      .pipe(
        catchError(this.handleError('getBoards', []))
      );
  }

  /** GET board by id. Return 'undefined' when id not found */
  getBoardNo404<Data>(id: number): Observable<Board> {
    const url = `${this.boardsUrl}/?id=${id}`;
    return this.http.get<Board[]>(url)
      .pipe(
        map(boards => boards[0]), // returns a {0|1} element array
        tap(h => {
            const outcome = h ? `fetched` : `did not find`;
        }),
        catchError(this.handleError<Board>(`getHero id=${id}`))
      );
  }

  /*
  addBoard(board: Board, boards: Board[]): Observable<Board[]> {
    boards.push(board);
    return of(boards);
  }
  */

  /** POST: add a new board to the server */
  addBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.boardsUrl, board, httpOptions)
      .pipe(
        catchError(this.handleError<Board>('addBoard'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error o remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    }
  }

  /** GET board by id. Will 404 if id not found */
  getBoard(id: number): Observable<Hero> {
    const url = `${this.boardsUrl}/${id}`;
    return this.http.get<Board>(url).pipe(
      catchError(this.handleError<Board>(`getBoard id=${id}`))
    )
  }

  /** PUT: update the board on the server */
  updateBoard(board: Board): Observable<any> {
    return this.http.put(this.boardsUrl, board, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateBoard'))
      )
  }

  /** DELETE: delete the board from the server */
  deleteBoard(board: Board | number): Observable<Board> {
    const id = typeof board === 'number' ? board : board.id;
    const url = `${this.boardsUrl}/${id}`;

    return this.http.delete<Board>(url, httpOptions).pipe(
      catchError(this.handleError<Board>('deleteBoard'))
    );
  }

}
