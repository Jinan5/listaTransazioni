import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTransazioniComponent } from './components/lista-transazioni/lista-transazioni.component';
import { ItemTransazioneComponent } from './components/item-transazione/item-transazione.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTransazioniComponent,
    ItemTransazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
