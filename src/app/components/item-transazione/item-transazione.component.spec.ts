import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTransazioneComponent } from './item-transazione.component';

describe('ItemTransazioneComponent', () => {
  let component: ItemTransazioneComponent;
  let fixture: ComponentFixture<ItemTransazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemTransazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTransazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
