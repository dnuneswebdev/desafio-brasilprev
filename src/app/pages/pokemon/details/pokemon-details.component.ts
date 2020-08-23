import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, Card } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonId: string;
  pokemonCard: Pokemon;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((routeId) => {
      this.pokemonId = routeId['id'];
      this.getPokemonInfo();
    });
  }

  getPokemonInfo() {
    this.pokemonService.getSinglePokemonCard(this.pokemonId)
      .subscribe((pokemon: Card) => {
        this.pokemonCard = pokemon.card
        this.isLoading = false;
      }, error => {
        alert('Erro! Não foi possivel carregar a carta!');
        console.log(error);
      });
  }

}
