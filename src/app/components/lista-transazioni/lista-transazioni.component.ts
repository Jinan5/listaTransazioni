import { Component } from '@angular/core';
import { Transazione } from '../../models/transazione';
import { TRANSAZIONI } from '../../data/transazioni';

@Component({
  selector: 'app-lista-transazioni',
  templateUrl: './lista-transazioni.component.html',
  styleUrl: './lista-transazioni.component.css',
})
export class ListaTransazioniComponent {
  transazioni: Transazione[] = TRANSAZIONI;
}
