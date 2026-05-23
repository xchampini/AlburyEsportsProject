import { Component, OnInit, inject, signal } from '@angular/core';
import { ApiEvent } from '../../shared/models/startgg-api.model';
import { StartggApi } from '../../shared/services/startgg-api';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events implements OnInit {
  protected events = signal<ApiEvent[]>([]);
  protected upcomingEvents = signal<ApiEvent[]>([]);
  protected pastEvents = signal<ApiEvent[]>([]);
  protected isLoading = signal(true);
  protected hasError = signal(false);

  private readonly startggApi = inject(StartggApi);

  ngOnInit(): void {
    this.startggApi.getEvents().subscribe({
      next: (response) => {
        console.log('Received events response:', response);
        this.events.set(response.events);
        this.upcomingEvents.set(response.upcomingEvents);
        this.pastEvents.set(response.pastEvents);
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.isLoading.set(false);
      },
    });
  }
}
