import { Directive, TemplateRef, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { ResourceStore, Resource } from '@claudiucelfilip/resource-store';
import { BehaviorSubject } from 'rxjs';


export interface ResourceContext extends Resource<any> {
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
  set rsResourceFrom (keyOrResource: string | Resource<any>) {
    let resource: ResourceContext = this.store.get(keyOrResource);
    const proxy = new Proxy(resource, {
      get: (target, name: string) => {
        // if (target[name] !== undefined) {
        //   if (typeof target[name] === 'function') {
        //     return target[name].bind(target);
        //   }
        //   return target[name];
        // }
        if (typeof name === 'string' && /\$$/.test(name) === false) {
          name += '$';
        }
        return target[name];
      }
    })

    this.context = proxy;
    this.context.$implicit = resource;
  }

  private updateView () {
    this.vcf.createEmbeddedView(this.tpl, this.context);
  }
}
