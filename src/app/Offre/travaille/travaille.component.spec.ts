import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailleComponent } from './travaille.component';

describe('TravailleComponent', () => {
  let component: TravailleComponent;
  let fixture: ComponentFixture<TravailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
