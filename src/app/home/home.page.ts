import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  texto: string = ''; // Texto ingresado por el usuario
  resultado: string = ''; // Resultado del proceso

  constructor() {}

  convierteMayusculas(): void {
    // Convierte el texto a mayúsculas
    this.resultado = this.texto.toUpperCase();
  }

  reinicia(): void {
    // Reinicia los valores
    this.texto = '';
    this.resultado = '';
  }
}
