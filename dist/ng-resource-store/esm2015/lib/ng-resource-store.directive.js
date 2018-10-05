/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';
import { ResourceStore, Resource } from 'resource-store';
/**
 * @record
 */
export function ResourceContext() { }
if (false) {
    /** @type {?|undefined} */
    ResourceContext.prototype.$implicit;
}
export class NgResourceStoreDirective {
    /**
     * @param {?} tpl
     * @param {?} vcf
     * @param {?} store
     */
    constructor(tpl, vcf, store) {
        this.tpl = tpl;
        this.vcf = vcf;
        this.store = store;
        this.selectedKeys = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateView();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    set rsResourceFrom(key) {
        /** @type {?} */
        let resource;
        if (key instanceof Resource) {
            resource = key;
        }
        else {
            resource = this.store.get(key);
        }
        this.context = resource;
        this.context.$implicit = resource;
    }
    /**
     * @return {?}
     */
    updateView() {
        this.vcf.createEmbeddedView(this.tpl, this.context);
    }
}
NgResourceStoreDirective.decorators = [
    { type: Directive, args: [{
                selector: '[rsResource]'
            },] },
];
NgResourceStoreDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: ResourceStore }
];
NgResourceStoreDirective.propDecorators = {
    rsResourceFrom: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgResourceStoreDirective.prototype.context;
    /** @type {?} */
    NgResourceStoreDirective.prototype.selectedKeys;
    /** @type {?} */
    NgResourceStoreDirective.prototype.tpl;
    /** @type {?} */
    NgResourceStoreDirective.prototype.vcf;
    /** @type {?} */
    NgResourceStoreDirective.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcmVzb3VyY2Utc3RvcmUvIiwic291cmNlcyI6WyJsaWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUl6RCxxQ0FFQzs7O0lBREMsb0NBQWdCOztBQU1sQixNQUFNOzs7Ozs7SUFHSixZQUFvQixHQUFxQixFQUFVLEdBQXFCLEVBQVUsS0FBb0I7UUFBbEYsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWU7UUFEdEcsaUJBQVksR0FBYSxFQUFFLENBQUM7SUFFNUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLGNBQWMsQ0FBRSxHQUFzQjs7WUFDcEMsUUFBeUI7UUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUIsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7OztZQVhtQixXQUFXO1lBQXFCLGdCQUFnQjtZQUMzRCxhQUFhOzs7NkJBcUJuQixLQUFLOzs7O0lBVE4sMkNBQXlCOztJQUN6QixnREFBNEI7O0lBQ2hCLHVDQUE2Qjs7SUFBRSx1Q0FBNkI7O0lBQUUseUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc291cmNlU3RvcmUsIFJlc291cmNlIH0gZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZUNvbnRleHQgZXh0ZW5kcyBSZXNvdXJjZSB7XG4gICRpbXBsaWNpdD86IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JzUmVzb3VyY2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmUge1xuICBjb250ZXh0OiBSZXNvdXJjZUNvbnRleHQ7XG4gIHNlbGVjdGVkS2V5czogc3RyaW5nW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cGw6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmNmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHN0b3JlOiBSZXNvdXJjZVN0b3JlKSB7XG4gIH1cblxuICBuZ09uSW5pdCAoKSB7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgcnNSZXNvdXJjZUZyb20gKGtleTogc3RyaW5nIHwgUmVzb3VyY2UpIHtcbiAgICBsZXQgcmVzb3VyY2U6IFJlc291cmNlQ29udGV4dDtcbiAgICBpZiAoa2V5IGluc3RhbmNlb2YgUmVzb3VyY2UpIHtcbiAgICAgIHJlc291cmNlID0ga2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvdXJjZSA9IHRoaXMuc3RvcmUuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0ID0gcmVzb3VyY2U7XG4gICAgdGhpcy5jb250ZXh0LiRpbXBsaWNpdCA9IHJlc291cmNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWaWV3ICgpIHtcbiAgICB0aGlzLnZjZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50cGwsIHRoaXMuY29udGV4dCk7XG4gIH1cbn1cbiJdfQ==