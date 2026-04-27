import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavRoutes } from '../../app.const';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar {
  protected routes = NavRoutes;
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
