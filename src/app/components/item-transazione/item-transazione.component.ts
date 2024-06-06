import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/transazione';

@Component({
  selector: 'app-item-transazione',
  templateUrl: './item-transazione.component.html',
  styleUrl: './item-transazione.component.css',
})
export class ItemTransazioneComponent {
  @Input()
  transazione?: Transazione;
}
