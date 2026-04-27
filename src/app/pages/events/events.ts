import { Component } from '@angular/core';
import { EVENTS } from '../../data/events.data';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {
  protected readonly events = EVENTS;
}
