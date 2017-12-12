export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: []
  },
  {
    id: 2,
    name: 'King James',
    addresses: []
  },
  {
    id: 3,
    name: 'Jerry Smith',
    addresses: []
  }
];

export const states = ['CA', 'MD', 'OH', 'VA'];
