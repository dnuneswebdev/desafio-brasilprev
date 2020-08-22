export interface Pokemon {
  id: number;
  name: string;
  types: Array<string>;
  imgLow: string;
  imgHigh: string;
  attackList: Array<AttackList>;
  resistances: Array<Resistances>;
  weaknesses: Array<Weaknesses>;
}

export interface AttackList {
  name: string;
  description: string;
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