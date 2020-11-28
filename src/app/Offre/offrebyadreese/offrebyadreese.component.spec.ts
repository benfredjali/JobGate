import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrebyadreeseComponent } from './offrebyadreese.component';

describe('OffrebyadreeseComponent', () => {
  let component: OffrebyadreeseComponent;
  let fixture: ComponentFixture<OffrebyadreeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffrebyadreeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrebyadreeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
