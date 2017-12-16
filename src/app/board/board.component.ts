import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../board';
import { BOARDS } from '../mock-boards';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  addBoard: boolean = false;
  createBoard: boolean = true;
  @Input() board: Board;
  boards: Board[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.getBoards();
  }

  toggleAddBoard(): void {
    this.addBoard = !this.addBoard;
    this.createBoard = !this.createBoard;
  }

  getBoards(): void {
    //this.boards = this.boardService.getBoards();

    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

  add(name: string): void {
    //alert("clicked: " + name);
    name = name.trim();
    if (!name) { return; }

    this.boardService.addBoard({ name } as Board, this.boards)
      .subscribe(boards => this.boards = boards);

  }

}
