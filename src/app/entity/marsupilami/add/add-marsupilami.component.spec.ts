import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarsupilamiComponent } from './add-marsupilami.component';

describe('AddMarsupilamiComponent', () => {
  let component: AddMarsupilamiComponent;
  let fixture: ComponentFixture<AddMarsupilamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarsupilamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarsupilamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
