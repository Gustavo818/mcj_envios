import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Utils } from '../../Utils/Utils';
 

@Component({
  selector: 'pag-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(
    private utils: Utils,
    ) { }
 
  user: string = '123';
  pass: string = "456";
  vermensaje = false;

  login(){

    if (this.user === undefined || this.user == '') {
      // this.utils.presentAlert('Error', "Escriba el nombre de usuario");
      console.log("Escriba el nombre de usuario");
      return;
    }

    if (this.pass === undefined || this.pass == '') {
      console.log("Escriba la Contaseña");
      // this.utils.presentAlert('Error', "Escriba la Contaseña");
      return;
    }


    console.log("Bienvenido");
    this.utils.ira('/menu');

    var todo = {
      nombre: "gustavo",
      completed: false
    };
     
 
  } 
 

  verMensajeOlvido() {
    this.vermensaje = !this.vermensaje;
  }

}

