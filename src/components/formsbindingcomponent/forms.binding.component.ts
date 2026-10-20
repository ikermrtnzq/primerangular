import { Component } from "@angular/core";

@Component({
    //NOMBRE QUE SE USUSARA EN LAS VISTAS
    selector: "forms-component",
    standalone: false,
    //NO NECESITAMOS NI HTML NI CSS OBLIGATORIAMENTE
    //HTML
    templateUrl: './forms.binding.component.html',
    //CSS
    //styleUrl:'./'
})

export class FormsComponent{
    public user: any;
    public mensaje: string;

    recibirDatos() : void{
        this.mensaje = "datos recibidos"
    }
    constructor(){
        this.mensaje = "hola";
        this.user ={
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }
}