import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosListarComponent } from './produtos-listar.component';

describe('ProdutosListarComponent', () => {
  let component: ProdutosListarComponent;
  let fixture: ComponentFixture<ProdutosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosListarComponent]
    });
    fixture = TestBed.createComponent(ProdutosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
