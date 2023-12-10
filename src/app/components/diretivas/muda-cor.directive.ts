import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMudaCor]'
})
export class MudaCorDirective {

  @HostBinding('style.transform') transform = ''
  @HostBinding('style.position') position = ''
  @HostBinding('style.shadow') shadow = ''

  @HostListener('mouseover') transforma(){
    this.transform = 'scale(1.5)'
    this.position = 'relative'
    this.shadow = '3px 3px 3px black'
  }
  @HostListener('mouseleave') volta(){
    this.transform = 'scale(1)'
    this.position = 'static'
    this.shadow = '0 0 0 black'
  }
  constructor() { }

}
