import { Directive, TemplateRef, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { ResourceStore, Resource } from 'resource-store';
import { BehaviorSubject } from 'rxjs';


export interface ResourceContext extends Resource {
  $implicit?: any;
}

@Directive({
  selector: '[rsResource]'
})
export class NgResourceStoreDirective {
  context: ResourceContext;
  selectedKeys: string[] = [];
  constructor(private tpl: TemplateRef<any>, private vcf: ViewContainerRef, private store: ResourceStore) {
  }

  ngOnInit () {
    this.updateView();
  }

  @Input()
  set rsResourceFrom (key: string | Resource) {
    let resource: ResourceContext;
    if (key instanceof Resource) {
      resource = key;
    } else {
      resource = this.store.get(key);
    }

    this.context = resource;
    this.context.$implicit = resource;
  }

  private updateView () {
    this.vcf.createEmbeddedView(this.tpl, this.context);
  }
}
