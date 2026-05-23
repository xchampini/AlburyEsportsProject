import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { StandingRow } from '../../shared/models/startgg-api.model';
import { StartggApi } from '../../shared/services/startgg-api';

@Component({
  selector: 'app-standings',
  imports: [DatePipe],
  templateUrl: './standings.html',
  styleUrl: './standings.scss',
})
export class Standings implements OnInit {
  protected eventName = 'Standings';
  protected updatedAt?: string;
  protected rows: StandingRow[] = [];
  protected isLoading = true;
  protected hasError = false;

  private readonly startggApi = inject(StartggApi);

  ngOnInit(): void {
    this.startggApi.getStandings().subscribe({
      next: (response) => {
        this.eventName = response.eventName;
        this.updatedAt = response.updatedAt;
        this.rows = response.rows;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }
}
