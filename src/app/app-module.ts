import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HookComponent } from '../components/hookscomponent/hook.component';
import { FormsComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';
import { TablaMultiplicar2Component } from '../components/tabla-multiplicar2-component/tabla-multiplicar2-component';
import { SumarNumerosComponent } from '../components/sumarcomponent/sumar.numeros.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HookComponent,
    FormsComponent,
    TablaMultiplicarComponent,
    TablaMultiplicar2Component,
    SumarNumerosComponent,
    DeportesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App],
})
export class AppModule {}
