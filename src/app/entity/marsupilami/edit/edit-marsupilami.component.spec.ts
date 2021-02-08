import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarsupilamiComponent } from './edit-marsupilami.component';

describe('EditMarsupilamiComponent', () => {
  let component: EditMarsupilamiComponent;
  let fixture: ComponentFixture<EditMarsupilamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMarsupilamiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarsupilamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
