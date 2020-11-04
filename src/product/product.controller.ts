import { Body, Controller , Get, HttpStatus, Post, Res } from '@nestjs/common';
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
    addProduct(@Body() addProductDTO:any ){
        // let status = HttpStatus.OK;
        // let response = this.productService.addProduct(addProductDTO);
        return this.productService.addProduct(addProductDTO);
        
    }

}
