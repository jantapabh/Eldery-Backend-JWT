import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor,FilesInterceptor } from '@nestjs/platform-express';
import { UploadimageService } from './uploadimage.service';

@Controller('image')
export class UploadimageController {

    constructor(private readonly uploadimageService: UploadimageService){}

    @Post('upload')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadFile(@UploadedFiles() file) {
        return file;
    }
}
