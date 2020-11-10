import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationdetailComponent } from './formationdetail.component';

describe('FormationdetailComponent', () => {
  let component: FormationdetailComponent;
  let fixture: ComponentFixture<FormationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
