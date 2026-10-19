import { Component } from "@angular/core";

//SIEMPRE DEBEMOS DECLARAR
@Component({
    //NOMBRE QUE SE USUSARA EN LAS VISTAS
    selector: "primer-component",
    standalone: false,
    //NO NECESITAMOS NI HTML NI CSS OBLIGATORIAMENTE

    //HTML
    templateUrl: './primer.component.html',
    //CSS
    styleUrls:["./primer.component.css"]
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