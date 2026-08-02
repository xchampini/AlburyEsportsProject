import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavBar } from './nav-bar';
import { NavRoute } from '../../shared/models/nav.model';

describe('NavBar', () => {
  let component: NavBar;
  let fixture: ComponentFixture<NavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark a fragment link active when its section is the current fragment', () => {
    component['activeFragment'].set('about');

    const route: NavRoute = {
      id: 4,
      label: 'About Us',
      path: '/',
      exactMatch: true,
      fragment: 'about',
    };

    expect(component.isLinkActive(route)).toBeTrue();
  });
});
