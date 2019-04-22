import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAllocComponent } from './seat-alloc.component';

describe('SeatAllocComponent', () => {
  let component: SeatAllocComponent;
  let fixture: ComponentFixture<SeatAllocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAllocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAllocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
