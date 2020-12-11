import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTravailleComponent } from './update-travaille.component';

describe('UpdateTravailleComponent', () => {
  let component: UpdateTravailleComponent;
  let fixture: ComponentFixture<UpdateTravailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTravailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTravailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
