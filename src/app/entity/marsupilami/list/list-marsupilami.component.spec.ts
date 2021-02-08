import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarsupilamiComponent } from './list-marsupilami.component';

describe('ListMarsupilamiComponent', () => {
  let component: ListMarsupilamiComponent;
  let fixture: ComponentFixture<ListMarsupilamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMarsupilamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMarsupilamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
