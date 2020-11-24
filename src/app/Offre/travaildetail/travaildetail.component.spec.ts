import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravaildetailComponent } from './travaildetail.component';

describe('TravaildetailComponent', () => {
  let component: TravaildetailComponent;
  let fixture: ComponentFixture<TravaildetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravaildetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravaildetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
