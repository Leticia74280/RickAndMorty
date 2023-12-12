import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMudaCor]'
})
export class MudaCorDirective {

  @HostBinding('style.transform') transform = ''
  @HostBinding('style.position') position = ''
  @HostBinding('style.boxShadow') boxShadow = '';

  @HostListener('mouseover') transforma(){
    this.transform = 'scale(1.5)'
    this.position = 'relative'
    this.boxShadow = '3px 3px 3px black';
  }
  @HostListener('mouseleave') volta(){
    this.transform = 'scale(1)'
    this.position = 'static'
    this.boxShadow = 'none';
  }
  constructor() { }

}
