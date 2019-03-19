import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustamerProductComponent } from './custamer-product.component';

describe('CustamerProductComponent', () => {
  let component: CustamerProductComponent;
  let fixture: ComponentFixture<CustamerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustamerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustamerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
