import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {
    public numero: number;
    public mensaje: string;
    public tabla: Array<number>
    
    recibirDatos() : void{
        this.mensaje = "recibido"
        this.tabla =[]
        for (let index = 0; index <= 10; index++) {
          let aux = 0;
          aux = this.numero*index;
          this.tabla.push(aux);
        }
    }
    constructor(){
      this.mensaje ="";
      this.numero = 0;
      this.tabla = [];
    }
}
