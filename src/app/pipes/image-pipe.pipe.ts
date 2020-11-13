import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    if(image.trim().length>0) return image
    return 'photo.png';
  }

}
