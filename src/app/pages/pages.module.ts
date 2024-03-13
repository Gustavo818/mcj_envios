import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { OrigenRegistroComponent } from './origen-registro/origen-registro.component';
import { OrigenListaComponent } from './origen-lista/origen-lista.component';
import { DestinoRegistroComponent } from './destino-registro/destino-registro.component';
import { DestinoListaComponent } from './destino-lista/destino-lista.component';




@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    OrigenRegistroComponent,
    OrigenListaComponent,
    DestinoRegistroComponent,
    DestinoListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports:[
    LoginComponent
  ]
})
export class PagesModule { }
