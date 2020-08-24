import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PokemonComponent } from './pokemon.component';
import { DebugElement } from '@angular/core';
import { PokemonModule } from '../pokemon.module';
import { By } from '@angular/platform-browser';
import { PokemonService } from 'src/app/services/pokemon.service';

describe('PokemonComponent', () => {

  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let element: DebugElement;
  let pokemonService: any;

  beforeEach(async(() => {

    const pokemonServiceSpy = jasmine.createSpyObj('PokemonService', ['getAllPokemonCards'])

    TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [
        PokemonModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy }
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PokemonComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        pokemonService = TestBed.get(PokemonService);
      })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
