import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMyOwnComponent } from './make-my-own.component';

describe('MakeMyOwnComponent', () => {
  let component: MakeMyOwnComponent;
  let fixture: ComponentFixture<MakeMyOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMyOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMyOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
