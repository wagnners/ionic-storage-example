import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigobarrasPage } from './codigobarras.page';

describe('CodigobarrasPage', () => {
  let component: CodigobarrasPage;
  let fixture: ComponentFixture<CodigobarrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigobarrasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigobarrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
