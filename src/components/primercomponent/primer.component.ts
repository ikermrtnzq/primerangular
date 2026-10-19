import { Component } from "@angular/core";

//SIEMPRE DEBEMOS DECLARAR
@Component({
    //NOMBRE QUE SE USUSARA EN LAS VISTAS
    selector: "primer-component",
    standalone: false,
    //NO NECESITAMOS NI HTML NI CSS OBLIGATORIAMENTE
    template: `
        <h1>Holaaa</h1>
        <h3 style="color: blue;">{{nombre}}</h3>
        <h3 style="color: cadetblue;">{{year}}</h3>
    `
})

//SIEMPRE DEBE TENER UNA CLASE
export class PrimerComponent{
    public nombre: string;
    public year: number;
    constructor() {
        this.nombre = "Iker"
        this.year = 2026;
    }
}