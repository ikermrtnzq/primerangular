import { Component } from "@angular/core";

@Component({
    //NOMBRE QUE SE USUSARA EN LAS VISTAS
    selector: "deportes-component",
    standalone: false,
    //NO NECESITAMOS NI HTML NI CSS OBLIGATORIAMENTE
    //HTML
    templateUrl: './deportes.component.html',
    //CSS
    styleUrl:'./deportes.component.css'
})

export class DeportesComponent{
    public sports: Array<string>;
    public numbers: Array<number>

    constructor(){
        this.sports =["baile","futbol", "natacion sincronizada", "gimnasia ritmica", "natacion"]
        this.numbers = [2, 67, 90, 345, 35]
    }
}