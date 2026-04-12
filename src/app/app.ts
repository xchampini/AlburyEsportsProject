import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';
import { register } from 'swiper/element/bundle';

// We need to manually register Swiper custom elements when imported from node modules
// Should just be done once to register Swiper custom elements globally
register();

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
