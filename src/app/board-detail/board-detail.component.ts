import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Board } from '../board';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  @Input() board: Board;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.boardService.getBoard(id)
      .subscribe(board => this.board = board);
  }

  goHome(): void {
    this.location.back();
  }

  save(): void {
    this.boardService.updateBoard(this.board)
      .subscribe(() => this.goHome());
  }

}
