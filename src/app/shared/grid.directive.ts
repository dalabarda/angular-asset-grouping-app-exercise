 import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
  
@Directive({
  selector: '[appGrid]'
})
export class GridDirective {
  // TODO:
  constructor(private elRef: ElementRef) {}
}