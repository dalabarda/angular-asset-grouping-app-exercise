 import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
  
@Directive({
  selector: '[appList]'
})
export class ListDirective {
  // TODO:
  constructor(private elRef: ElementRef) {}
}