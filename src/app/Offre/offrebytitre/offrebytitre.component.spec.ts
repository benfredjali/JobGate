import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrebytitreComponent } from './offrebytitre.component';

describe('OffrebytitreComponent', () => {
  let component: OffrebytitreComponent;
  let fixture: ComponentFixture<OffrebytitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrebytitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrebytitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
