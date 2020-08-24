import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { DebugElement } from '@angular/core';
import { PokemonModule } from '../pokemon.module';

describe('DetailsComponent', () => {

  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let element: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      imports: [PokemonModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PokemonDetailsComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
      })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
