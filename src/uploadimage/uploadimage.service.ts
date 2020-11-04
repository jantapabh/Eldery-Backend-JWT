import { Inject, Injectable } from '@nestjs/common';
import { UploadImage } from './entity/uploadimage.entity';

@Injectable()
export class UploadimageService {

    constructor(@Inject('UPLOADIMAGES_REPOSITORY') private uploadimagesRepository:typeof UploadImage){}


}
