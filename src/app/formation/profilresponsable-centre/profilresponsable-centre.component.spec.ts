import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilresponsableCentreComponent } from './profilresponsable-centre.component';

describe('ProfilresponsableCentreComponent', () => {
  let component: ProfilresponsableCentreComponent;
  let fixture: ComponentFixture<ProfilresponsableCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilresponsableCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilresponsableCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
