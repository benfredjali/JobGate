import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTravailleComponent } from './ajouter-travaille.component';

describe('AjouterTravailleComponent', () => {
  let component: AjouterTravailleComponent;
  let fixture: ComponentFixture<AjouterTravailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTravailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTravailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
