import { TemplateRef, ViewContainerRef } from '@angular/core';
import { ResourceStore, Resource } from 'resource-store';
export interface ResourceContext extends Resource {
    $implicit?: any;
}
export declare class NgResourceStoreDirective {
    private tpl;
    private vcf;
    private store;
    context: ResourceContext;
    selectedKeys: string[];
    constructor(tpl: TemplateRef<any>, vcf: ViewContainerRef, store: ResourceStore);
    ngOnInit(): void;
    rsResourceFrom: string | Resource;
    private updateView();
}
