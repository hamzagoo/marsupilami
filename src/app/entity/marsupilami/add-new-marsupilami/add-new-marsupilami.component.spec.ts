import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMarsupilamiComponent } from './add-new-marsupilami.component';

describe('AddNewMarsupilamiComponent', () => {
  let component: AddNewMarsupilamiComponent;
  let fixture: ComponentFixture<AddNewMarsupilamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMarsupilamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMarsupilamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
