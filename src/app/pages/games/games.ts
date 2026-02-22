import { Component } from '@angular/core';
import { GAMES } from '../../data/games.data';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games {
  protected readonly games = GAMES;
}
