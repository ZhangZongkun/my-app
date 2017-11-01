/**
 * Created by Administrator on 2017/11/1.
 */

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
  }
];

export const states = ['CA', 'MD', 'OH', 'VA'];
