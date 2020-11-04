import { Body, Controller , Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import {Products} from './entitys/product.entity';
import { addProductDTO } from './dto/add-product.dto';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get('/')
    getProducts(){
        return this.productService.findAll();
    }

    @Post('/addproduct')
    addProduct(@Body() addProductDTO:addProductDTO){
        return " 5 5 5 "
    }

}
