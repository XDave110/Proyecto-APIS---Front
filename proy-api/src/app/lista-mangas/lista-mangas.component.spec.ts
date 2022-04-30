import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMangasComponent } from './lista-mangas.component';

describe('ListaMangasComponent', () => {
  let component: ListaMangasComponent;
  let fixture: ComponentFixture<ListaMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMangasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
