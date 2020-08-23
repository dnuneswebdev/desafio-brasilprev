import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Card, Pokemon } from '../models/pokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemonCards() {
    return this.http.get<Card>(`${environment.api}/cards`)
      .pipe(map((pokemon: Card) => {
        return pokemon.cards.sort((a: Pokemon, b: Pokemon) => {
          return a.name < b.name ? -1 : 1;
        });
      }));
  }

  getSinglePokemonCard(pokemonId: string) {
    return this.http.get<Card>(`${environment.api}/cards/${pokemonId}`);
  }
}
