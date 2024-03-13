import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { OrigenRegistroComponent } from './pages/origen-registro/origen-registro.component';
import { OrigenListaComponent } from './pages/origen-lista/origen-lista.component';
import { DestinoRegistroComponent } from './pages/destino-registro/destino-registro.component';
import { DestinoListaComponent } from './pages/destino-lista/destino-lista.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'origen-registro', component: OrigenRegistroComponent },
  { path: 'origen-lista', component: OrigenListaComponent },
  { path: 'destino-registro', component: DestinoRegistroComponent },
  { path: 'destino-lista', component: DestinoListaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
