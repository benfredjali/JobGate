import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilresponsableSocieteComponent } from './profilresponsable-societe.component';

describe('ProfilresponsableSocieteComponent', () => {
  let component: ProfilresponsableSocieteComponent;
  let fixture: ComponentFixture<ProfilresponsableSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilresponsableSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilresponsableSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
