import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './main/pokemon.component';
import { PokemonDetailsComponent } from './details/pokemon-details.component';
import { PokemonRouting } from './pokemon.routing';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    PokemonRouting,
    SpinnerModule
  ]
})
export class PokemonModule { }
