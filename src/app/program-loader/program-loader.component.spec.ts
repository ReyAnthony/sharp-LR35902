import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramLoaderComponent } from './program-loader.component';

describe('ProgramLoaderComponent', () => {
  let component: ProgramLoaderComponent;
  let fixture: ComponentFixture<ProgramLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
