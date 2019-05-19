import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KdriveComponent } from './kdrive.component';

describe('KdriveComponent', () => {
  let component: KdriveComponent;
  let fixture: ComponentFixture<KdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
