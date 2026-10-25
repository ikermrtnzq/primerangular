import { Component } from '@angular/core';

@Component({
  selector: 'forms-component',
  standalone: false,
  templateUrl: './forms.binding.component.html',
})
export class FormsComponent {
  public user: {
    nombre: string;
    apellidos: string;
    edad: number;
  };
  public mensaje: string;

  recibirDatos(): void {
    this.mensaje = 'datos recibidos';
  }

  constructor() {
    this.mensaje = 'Manda los datos';
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
  }
}