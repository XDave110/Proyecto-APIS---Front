import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLibroComponent } from './lista-libro.component';

describe('ListaLibroComponent', () => {
  let component: ListaLibroComponent;
  let fixture: ComponentFixture<ListaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
