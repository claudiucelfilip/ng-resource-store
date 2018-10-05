/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
export class NgResourceStoreDirective {
    /**
     * @param {?} tpl
     * @param {?} vcf
     */
    constructor(tpl, vcf) {
        this.tpl = tpl;
        this.vcf = vcf;
        this.vcf.createEmbeddedView(this.tpl);
    }
}
NgResourceStoreDirective.decorators = [
    { type: Directive, args: [{
                selector: '[rsResource]'
            },] },
];
NgResourceStoreDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];
if (false) {
    /** @type {?} */
    NgResourceStoreDirective.prototype.tpl;
    /** @type {?} */
    NgResourceStoreDirective.prototype.vcf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcmVzb3VyY2Utc3RvcmUvIiwic291cmNlcyI6WyJsaWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUt6RSxNQUFNOzs7OztJQUNKLFlBQW9CLEdBQXFCLEVBQVUsR0FBcUI7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7OztZQUptQixXQUFXO1lBQUUsZ0JBQWdCOzs7O0lBTW5DLHVDQUE2Qjs7SUFBRSx1Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyc1Jlc291cmNlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cGw6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmNmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy52Y2YuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudHBsKTtcbiAgfVxufSJdfQ==