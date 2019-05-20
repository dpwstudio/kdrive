import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaFormComponent } from './resa-form.component';

describe('ResaFormComponent', () => {
  let component: ResaFormComponent;
  let fixture: ComponentFixture<ResaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
