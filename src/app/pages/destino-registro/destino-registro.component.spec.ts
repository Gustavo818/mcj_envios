import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoRegistroComponent } from './destino-registro.component';

describe('DestinoRegistroComponent', () => {
  let component: DestinoRegistroComponent;
  let fixture: ComponentFixture<DestinoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinoRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
