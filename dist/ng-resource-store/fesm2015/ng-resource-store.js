import { Injectable, NgModule, Directive, TemplateRef, ViewContainerRef, defineInjectable } from '@angular/core';
import { ResourceStore } from 'resource-store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgResourceStoreService {
    constructor() { }
}
NgResourceStoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
NgResourceStoreService.ctorParameters = () => [];
/** @nocollapse */ NgResourceStoreService.ngInjectableDef = defineInjectable({ factory: function NgResourceStoreService_Factory() { return new NgResourceStoreService(); }, token: NgResourceStoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgResourceStoreDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgResourceStoreModule {
    /**
     * @param {?} options
     * @return {?}
     */
    static forStore(options) {
        /** @type {?} */
        let store = new ResourceStore(options);
        return {
            ngModule: NgResourceStoreModule,
            providers: [
                {
                    provide: ResourceStore,
                    useFactory: () => store
                }
            ]
        };
    }
}
NgResourceStoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgResourceStoreDirective],
                exports: [NgResourceStoreDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgResourceStoreService, NgResourceStoreModule, NgResourceStoreDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXJlc291cmNlLXN0b3JlL2xpYi9uZy1yZXNvdXJjZS1zdG9yZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JzUmVzb3VyY2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRwbDogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2Y2Y6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnZjZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50cGwpO1xuICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElSZXNvdXJjZU9wdGlvbnMsIFJlc291cmNlU3RvcmUgfSBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5pbXBvcnQgKiBhcyBTb3JlUHJvcHMgZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yU3RvcmUob3B0aW9ucykge1xuICAgIGxldCBzdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdSZXNvdXJjZVN0b3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgcHJvdmlkZTogUmVzb3VyY2VTdG9yZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiBzdG9yZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7QUNKRDs7Ozs7SUFNRSxZQUFvQixHQUFxQixFQUFVLEdBQXFCO1FBQXBELFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdkM7OztZQU5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7O1lBSm1CLFdBQVc7WUFBRSxnQkFBZ0I7Ozs7Ozs7QUNBakQ7Ozs7O0lBVUUsT0FBTyxRQUFRLENBQUMsT0FBTzs7WUFDakIsS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFVBQVUsRUFBRSxNQUFNLEtBQUs7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFBO0tBQ0Y7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7In0=