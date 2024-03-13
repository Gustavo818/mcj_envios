import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenListaComponent } from './origen-lista.component';

describe('OrigenListaComponent', () => {
  let component: OrigenListaComponent;
  let fixture: ComponentFixture<OrigenListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrigenListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrigenListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
