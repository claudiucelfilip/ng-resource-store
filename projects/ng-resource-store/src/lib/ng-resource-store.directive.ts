import { Directive, TemplateRef, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ResourceStore, Resource, symbol } from '@claudiucelfilip/resource-store';
import { BehaviorSubject } from 'rxjs';


export interface ResourceContext extends Resource<any> {
  $implicit?: any;
}
export interface ResourcesContext extends Map<string, ResourceContext> {
  $implicit?: any;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rsResource]'
})
export class NgResourceStoreDirective implements OnInit {
  context: ResourceContext | ResourcesContext;
  selectedKeys: string[] = [];
  constructor(private tpl: TemplateRef<any>, private vcf: ViewContainerRef, private store: ResourceStore) {
  }

  ngOnInit () {
    this.updateView();
  }

  private proxifyResource(resource) {
    return new Proxy(resource, {
      get: (target, name: string) => {
        if (typeof name === 'string' && name !== '$implicit' && /\$$/.test(name) === false) {
          name += '$';
        }
        return target[name];
      }
    });
  }

  private proxifyStore(resource) {
    return new Proxy(resource, {
      get: (target, name: string) => {
        if (typeof name === 'string' && name !== '$implicit' && /\$$/.test(name) === false) {
          name += '$';
        }
        return target[name];
      }
    });
  }
  private camelize(str) {
    return str.replace(/-(.|$)/g, item => (item[1] && item[1].toUpperCase()) || '');
  }
  @Input()
  set rsResourceFrom (keyOrResource: string | Resource<any> | any) {
    if (typeof keyOrResource === 'object' && !(keyOrResource instanceof Resource)) {
      const resources = new Map();

      Object.keys(keyOrResource).forEach(key => {
        resources[key] = this.store.get(keyOrResource[key]);
      });

      this.context = resources;
      this.context.$implicit = resources;
    } else {
      const resource: ResourceContext = this.store.get(keyOrResource);
      const proxy = this.proxifyResource(resource);

      this.context = proxy;
      this.context.$implicit = resource;

    }
  }

  private updateView () {
    this.vcf.createEmbeddedView(this.tpl, this.context);
  }
}
