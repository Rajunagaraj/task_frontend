import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercomponetComponent } from './filtercomponet.component';

describe('FiltercomponetComponent', () => {
  let component: FiltercomponetComponent;
  let fixture: ComponentFixture<FiltercomponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltercomponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltercomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
