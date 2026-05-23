import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Standings } from './standings';

describe('Standings', () => {
  let component: Standings;
  let fixture: ComponentFixture<Standings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Standings],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Standings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
