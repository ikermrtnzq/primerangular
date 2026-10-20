import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HookComponent } from '../components/hookscomponent/hook.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from '../components/formsbindingcomponent/forms.binding.component';
@NgModule({
  declarations: [
    App, PrimerComponent, HookComponent, DeportesComponent, FormsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
