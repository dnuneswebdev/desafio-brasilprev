import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './main/pokemon.component';
import { PokemonDetailsComponent } from './details/pokemon-details.component';
import { PokemonRouting } from './pokemon.routing';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    PokemonRouting,
  ]
})
export class PokemonModule { }
