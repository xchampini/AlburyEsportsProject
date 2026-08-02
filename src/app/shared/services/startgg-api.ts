import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsResponse, StandingsResponse } from '../models/startgg-api.model';

@Injectable({
  providedIn: 'root',
})
export class StartggApi {
  private readonly http = inject(HttpClient);

  getEvents(): Observable<EventsResponse> {
    return this.http.get<EventsResponse>('/api/events');
  }

  getStandings(): Observable<StandingsResponse> {
    return this.http.get<StandingsResponse>('/api/standings');
  }
}
