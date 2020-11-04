import { Inject, Injectable } from '@nestjs/common';
import {Products} from './entitys/product.entity';

@Injectable()
export class ProductService {

    constructor(@Inject('PRODUCTS_REPOSITORY') private productsRepository:typeof Products){}

    async findAll(): Promise<Products[]>{
        return this.productsRepository.findAll();
    }

}
