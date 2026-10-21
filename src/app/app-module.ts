import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HookComponent } from '../components/hookscomponent/hook.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarcomponent/sumar.numeros.component';
import { CommonModule } from '@angular/common';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';
import { TablaMultiplicar2Component } from '../components/tabla-multiplicar2-component/tabla-multiplicar2-component';


@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HookComponent,
    DeportesComponent,
    FormsComponent,
    SumarNumerosComponent,
    TablaMultiplicarComponent,
    TablaMultiplicar2Component

  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
