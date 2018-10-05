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
var NgResourceStoreDirective = /** @class */ (function () {
    function NgResourceStoreDirective(tpl, vcf, store) {
        this.tpl = tpl;
        this.vcf = vcf;
        this.store = store;
        this.selectedKeys = [];
    }
    /**
     * @return {?}
     */
    NgResourceStoreDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateView();
    };
    Object.defineProperty(NgResourceStoreDirective.prototype, "rsResourceFrom", {
        set: /**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var resource;
            if (key instanceof Resource) {
                resource = key;
            }
            else {
                resource = this.store.get(key);
            }
            this.context = resource;
            this.context.$implicit = resource;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgResourceStoreDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        this.vcf.createEmbeddedView(this.tpl, this.context);
    };
    NgResourceStoreDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[rsResource]'
                },] },
    ];
    NgResourceStoreDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: ResourceStore }
    ]; };
    NgResourceStoreDirective.propDecorators = {
        rsResourceFrom: [{ type: Input }]
    };
    return NgResourceStoreDirective;
}());
export { NgResourceStoreDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcmVzb3VyY2Utc3RvcmUvIiwic291cmNlcyI6WyJsaWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUl6RCxxQ0FFQzs7O0lBREMsb0NBQWdCOztBQUdsQjtJQU1FLGtDQUFvQixHQUFxQixFQUFVLEdBQXFCLEVBQVUsS0FBb0I7UUFBbEYsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWU7UUFEdEcsaUJBQVksR0FBYSxFQUFFLENBQUM7SUFFNUIsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsc0JBQ0ksb0RBQWM7Ozs7O1FBRGxCLFVBQ29CLEdBQXNCOztnQkFDcEMsUUFBeUI7WUFDN0IsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDakIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBOzs7O0lBRU8sNkNBQVU7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7OztnQkFYbUIsV0FBVztnQkFBcUIsZ0JBQWdCO2dCQUMzRCxhQUFhOzs7aUNBcUJuQixLQUFLOztJQWdCUiwrQkFBQztDQUFBLEFBN0JELElBNkJDO1NBMUJZLHdCQUF3Qjs7O0lBQ25DLDJDQUF5Qjs7SUFDekIsZ0RBQTRCOztJQUNoQix1Q0FBNkI7O0lBQUUsdUNBQTZCOztJQUFFLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0b3JlLCBSZXNvdXJjZSB9IGZyb20gJ3Jlc291cmNlLXN0b3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VDb250ZXh0IGV4dGVuZHMgUmVzb3VyY2Uge1xuICAkaW1wbGljaXQ/OiBhbnk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyc1Jlc291cmNlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIHtcbiAgY29udGV4dDogUmVzb3VyY2VDb250ZXh0O1xuICBzZWxlY3RlZEtleXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZjZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzdG9yZTogUmVzb3VyY2VTdG9yZSkge1xuICB9XG5cbiAgbmdPbkluaXQgKCkge1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJzUmVzb3VyY2VGcm9tIChrZXk6IHN0cmluZyB8IFJlc291cmNlKSB7XG4gICAgbGV0IHJlc291cmNlOiBSZXNvdXJjZUNvbnRleHQ7XG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIFJlc291cmNlKSB7XG4gICAgICByZXNvdXJjZSA9IGtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb3VyY2UgPSB0aGlzLnN0b3JlLmdldChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IHJlc291cmNlO1xuICAgIHRoaXMuY29udGV4dC4kaW1wbGljaXQgPSByZXNvdXJjZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldyAoKSB7XG4gICAgdGhpcy52Y2YuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudHBsLCB0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iXX0=