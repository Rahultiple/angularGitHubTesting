import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSidebarComponentComponent } from './product-list-sidebar-component.component';

describe('ProductListSidebarComponentComponent', () => {
  let component: ProductListSidebarComponentComponent;
  let fixture: ComponentFixture<ProductListSidebarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListSidebarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListSidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
