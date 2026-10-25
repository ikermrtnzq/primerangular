
import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "sumar-component",
    standalone: false,
    templateUrl: './sumar.numeros.component.html',
})

export class SumarNumerosComponent{
    public suma: number;
    @ViewChild("cajanumero1") cajamnumero1: ElementRef;
    @ViewChild("cajanumero2") cajamnumero2: ElementRef;

    constructor() {
        this.suma = 0;
        this.cajamnumero1= new ElementRef(0)
        this.cajamnumero2 = new ElementRef(0)
    }

    sumarNumeros() {
        let num1 = this.cajamnumero1.nativeElement.value;
        let num2 = this.cajamnumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2)
    }


}