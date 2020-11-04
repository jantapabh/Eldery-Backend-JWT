import { Inject, Injectable } from '@nestjs/common';
import { addImageDTO } from './dto/add-image.dto';
import { UploadImage } from './entity/uploadimage.entity';

@Injectable()
export class UploadimageService {

    constructor(@Inject('UPLOADIMAGES_REPOSITORY') private uploadimagesRepository:typeof UploadImage){}

    async addImages(file:any){
        const data = new UploadImage();
        data.name = file[0].name;
        data.fieldname = file[0].fieldname;
        data.originalname = file[0].originalname;
        data.encoding = file[0].encoding;
        data.mimetype = file[0].mimetype;


        return file[0];

    }

}
