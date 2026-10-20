import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HookComponent } from '../components/hookscomponent/hook.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
@NgModule({
  declarations: [
    App, PrimerComponent, HookComponent, DeportesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
