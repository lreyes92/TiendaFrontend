import { Item } from '../entities/item.model';


export const ITEMS:Item[]=[{
  'id': 1,
  'name': 'manzana',
  'description': 'Las mejores manzanas',
  'stock': 5,
  'price': 14.99,
  'img':'assets/manzana.jpg',
  'selected':false,
  'quantity':0
},
{
  'id': 2,
  'name': 'sandia',
  'description': 'Sandias riquisimas',
  'stock': 7,
  'price': 5,
  'img':'assets/sandia.jpg',
  'selected':true,
  'quantity':0
},
{
  'id': 3,
  'name': 'pera',
  'description': 'Recien cogidas del arbol',
  'stock': 0,
  'price': 3.5,
  'img':'assets/pera.jpg',
  'selected':false,
  'quantity':0
},
{
  'id': 4,
  'name': 'platano',
  'description': 'Los mejores de canarias',
  'stock': 25,
  'price': 1.05,
  'img':'assets/platanos.jpg',
  'selected':false,
  'quantity':0
},
{
  'id': 5,
  'name': 'kiwi',
  'description': 'Kiwi kiwi kiwi kiwi',
  'stock': 12,
  'price': 2.5,
  'img':'assets/kiwi.jpg',
  'selected':false,
  'quantity':0
},
{
  'id': 6,
  'name': 'mango',
  'description': 'Full de Mango',
  'stock': 15,
  'price': 3,
  'img':'assets/mango.jpg',
  'selected':false,
  'quantity':0
}];
