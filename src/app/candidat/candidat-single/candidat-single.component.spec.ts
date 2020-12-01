import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatSingleComponent } from './candidat-single.component';

describe('CandidatSingleComponent', () => {
  let component: CandidatSingleComponent;
  let fixture: ComponentFixture<CandidatSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
