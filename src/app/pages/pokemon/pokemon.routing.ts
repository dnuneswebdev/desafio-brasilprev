import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './main/pokemon.component';
import { PokemonDetailsComponent } from './details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'pokemon-details/:id', component: PokemonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRouting { }
