import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rsResource]'
})
export class NgResourceStoreDirective {
  constructor(private tpl: TemplateRef<any>, private vcf: ViewContainerRef) {
    this.vcf.createEmbeddedView(this.tpl);
  }
}