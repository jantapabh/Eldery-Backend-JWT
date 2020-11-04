import { Products } from './product.entity';

export const catsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Products ,
  },
];