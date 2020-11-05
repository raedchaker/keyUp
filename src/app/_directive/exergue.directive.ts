import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExergue]'
})
export class ExergueDirective {

  //@HostBinding('style.font-size.px') size = 50;
  //@HostBinding('style.border.px') border = 5;
  @HostBinding('style.color') bg = 'lightblue';
  @HostBinding('style.border-color') bC = 'red';
  @HostListener('keyup') keyup(){
    this.bg= this.getRandomColor();
    this.bC= this.getRandomColor();
  } 


  
  constructor() { }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }
}
