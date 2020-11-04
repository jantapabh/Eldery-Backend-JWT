
import { UploadImage } from './uploadimage.entity';

export const uploadIMAGESProviders = [
  {
    provide: 'UPLOADIMAGES_REPOSITORY',
    useValue: UploadImage ,
  },
];