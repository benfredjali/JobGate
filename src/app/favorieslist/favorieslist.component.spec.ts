import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorieslistComponent } from './favorieslist.component';

describe('FavorieslistComponent', () => {
  let component: FavorieslistComponent;
  let fixture: ComponentFixture<FavorieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
