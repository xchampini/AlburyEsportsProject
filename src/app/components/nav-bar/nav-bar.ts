import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { debounceTime, filter, fromEvent, startWith } from 'rxjs';
import { NavRoutes } from '../../app.const';
import { NavRoute } from '../../shared/models/nav.model';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar implements OnInit {
  protected routes = NavRoutes;
  protected readonly isMenuOpen = signal(false);
  protected readonly activeFragment = signal<string | null>(null);

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.updateActiveFragment();

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateActiveFragment();
    });

    fromEvent(window, 'scroll')
      .pipe(startWith(null), debounceTime(50))
      .subscribe(() => {
        this.updateActiveFragment();
      });
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected isLinkActive(route: NavRoute): boolean {
    if (route.fragment) {
      return this.activeFragment() === route.fragment;
    }

    return this.activeFragment() === null;
  }

  private updateActiveFragment(): void {
    const routeFragment = this.activatedRoute.snapshot.fragment;
    if (routeFragment) {
      this.activeFragment.set(routeFragment);
      return;
    }

    const scrollOffset = window.scrollY + 140;
    const matchingRoute = this.routes
      .filter((route) => route.fragment)
      .find((route) => {
        const section = document.getElementById(route.fragment!);
        if (!section) {
          return false;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        return scrollOffset >= top && scrollOffset < bottom;
      });

    this.activeFragment.set(matchingRoute?.fragment ?? null);
  }
}
