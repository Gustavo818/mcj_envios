import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenRegistroComponent } from './origen-registro.component';

describe('OrigenRegistroComponent', () => {
  let component: OrigenRegistroComponent;
  let fixture: ComponentFixture<OrigenRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrigenRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrigenRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
