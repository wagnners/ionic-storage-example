import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandovozPage } from './comandovoz.page';

describe('ComandovozPage', () => {
  let component: ComandovozPage;
  let fixture: ComponentFixture<ComandovozPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandovozPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandovozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
