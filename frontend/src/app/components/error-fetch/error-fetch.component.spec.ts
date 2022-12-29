import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFetchComponent } from './error-fetch.component';

describe('ErrorFetchComponent', () => {
  let component: ErrorFetchComponent;
  let fixture: ComponentFixture<ErrorFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorFetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
