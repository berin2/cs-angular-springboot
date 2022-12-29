import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpdateCreateComponent } from './project-update-create.component';

describe('ProjectUpdateCreateComponent', () => {
  let component: ProjectUpdateCreateComponent;
  let fixture: ComponentFixture<ProjectUpdateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUpdateCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectUpdateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
