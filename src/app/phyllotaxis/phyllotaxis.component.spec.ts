import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyllotaxisComponent } from './phyllotaxis.component';

describe('PhyllotaxisComponent', () => {
  let component: PhyllotaxisComponent;
  let fixture: ComponentFixture<PhyllotaxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhyllotaxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyllotaxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
