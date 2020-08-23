export interface Card {
  card: Pokemon;
  cards: Array<Pokemon>;
}

export interface Pokemon {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  types: Array<string>;
  imageUrl: string;
  imageUrlHiRes: string;
  attacks: Array<AttackList>;
  resistances: Array<Resistances>;
  weaknesses: Array<Weaknesses>;
}

export interface AttackList {
  name: string;
  text: string;
  manaCost: number;
  damage: string;
}

export interface Resistances {
  type: string;
  value: string;
}

export interface Weaknesses {
  type: string;
  value: string;
}