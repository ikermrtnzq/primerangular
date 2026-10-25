import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar2-component',
  standalone: false,
  styleUrl: './tabla-multiplicar2-component.css',
  templateUrl: './tabla-multiplicar2-component.html',
})
export class TablaMultiplicar2Component {
    public tabla : Array<number>;
    @ViewChild("cajanumero") cajanumero: ElementRef;

    constructor() {
      this.tabla = [],
      this.cajanumero = new ElementRef(0);
    }

    recibirDatos() {
      let numero = this.cajanumero.nativeElement.value;
      this.tabla = [];
      for (let num = 0; num <= 10; num++) {
        let aux = 0;
        aux = parseInt(numero)*num;
        this.tabla.push(aux);
        
      }

    }

}
