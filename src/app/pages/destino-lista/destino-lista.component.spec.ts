import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoListaComponent } from './destino-lista.component';

describe('DestinoListaComponent', () => {
  let component: DestinoListaComponent;
  let fixture: ComponentFixture<DestinoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
