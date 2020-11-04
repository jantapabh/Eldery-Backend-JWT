import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { uploadIMAGESProviders } from './entity/uploadimage.providers';
import { UploadimageController } from './uploadimage.controller';
import { UploadimageService } from './uploadimage.service';

@Module({
  imports:[DatabaseModule],
  controllers: [UploadimageController],
  providers: [UploadimageService,...uploadIMAGESProviders]
})
export class UploadimageModule {}
