import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// TODO: this directive is not used. revise it later. could be useful though

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }  
  }

  constructor( private templateRef: TemplateRef<any>, private vcRef : ViewContainerRef) { }

}