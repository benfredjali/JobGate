import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTravailleComponent } from './list-travaille.component';

describe('ListTravailleComponent', () => {
  let component: ListTravailleComponent;
  let fixture: ComponentFixture<ListTravailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTravailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTravailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
