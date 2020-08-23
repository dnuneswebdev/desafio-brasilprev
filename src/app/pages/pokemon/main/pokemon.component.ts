import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  isLoading: boolean = true;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemonCards()
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
        this.filteredPokemons = [...this.pokemons];
        this.isLoading = false;
      }, error => {
        alert('Erro! Não foi possivel carregar as cartas!');
        console.log(error);
      });
  }

  searchPokemon(value: string) {
    this.filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase());
    });
  }

}
