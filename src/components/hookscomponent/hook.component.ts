import { Component, OnInit } from "@angular/core";

@Component({
    //NOMBRE QUE SE USUSARA EN LAS VISTAS
    selector: "hook-component",
    standalone: false,
    //NO NECESITAMOS NI HTML NI CSS OBLIGATORIAMENTE
    //HTML
    templateUrl: './hook.component.html',
    //CSS
    
})

export class HookComponent implements OnInit{
    public mensaje: string

    constructor(){
        console.log("Constructor: Primero");
        this.mensaje="Hoy es lunes..."
    }
    ngOnInit(): void {
        console.log("OnInit: Despues de constructor");
    }
    ngDoCheck(): void {
        console.log("DoCheck: cada vez que el component se actualiza");
    }
    cambiarMensaje(): void{
        this.mensaje="He cambiado hoy es martess"
    }
}
