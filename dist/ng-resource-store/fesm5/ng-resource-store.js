import { Injectable, NgModule, Directive, TemplateRef, ViewContainerRef, defineInjectable } from '@angular/core';
import { ResourceStore } from 'resource-store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgResourceStoreService = /** @class */ (function () {
    function NgResourceStoreService() {
    }
    NgResourceStoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    NgResourceStoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgResourceStoreService.ngInjectableDef = defineInjectable({ factory: function NgResourceStoreService_Factory() { return new NgResourceStoreService(); }, token: NgResourceStoreService, providedIn: "root" });
    return NgResourceStoreService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgResourceStoreDirective = /** @class */ (function () {
    function NgResourceStoreDirective(tpl, vcf) {
        this.tpl = tpl;
        this.vcf = vcf;
        this.vcf.createEmbeddedView(this.tpl);
    }
    NgResourceStoreDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[rsResource]'
                },] },
    ];
    NgResourceStoreDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ViewContainerRef }
    ]; };
    return NgResourceStoreDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgResourceStoreModule = /** @class */ (function () {
    function NgResourceStoreModule() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    NgResourceStoreModule.forStore = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var store = new ResourceStore(options);
        return {
            ngModule: NgResourceStoreModule,
            providers: [
                {
                    provide: ResourceStore,
                    useFactory: function () { return store; }
                }
            ]
        };
    };
    NgResourceStoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgResourceStoreDirective],
                    exports: [NgResourceStoreDirective]
                },] },
    ];
    return NgResourceStoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgResourceStoreService, NgResourceStoreModule, NgResourceStoreDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXJlc291cmNlLXN0b3JlL2xpYi9uZy1yZXNvdXJjZS1zdG9yZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JzUmVzb3VyY2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRwbDogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2Y2Y6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLnZjZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50cGwpO1xuICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElSZXNvdXJjZU9wdGlvbnMsIFJlc291cmNlU3RvcmUgfSBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5pbXBvcnQgKiBhcyBTb3JlUHJvcHMgZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yU3RvcmUob3B0aW9ucykge1xuICAgIGxldCBzdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdSZXNvdXJjZVN0b3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgcHJvdmlkZTogUmVzb3VyY2VTdG9yZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiBzdG9yZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2lDQUpEO0NBUUM7Ozs7OztBQ1JEO0lBTUUsa0NBQW9CLEdBQXFCLEVBQVUsR0FBcUI7UUFBcEQsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN2Qzs7Z0JBTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7O2dCQUptQixXQUFXO2dCQUFFLGdCQUFnQjs7SUFTakQsK0JBQUM7Q0FBQTs7Ozs7O0FDVEQ7SUFLQTtLQWlCQzs7Ozs7SUFaUSw4QkFBUTs7OztJQUFmLFVBQWdCLE9BQU87O1lBQ2pCLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUssR0FBQTtpQkFDeEI7YUFDRjtTQUNGLENBQUE7S0FDRjs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDOztJQWNELDRCQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7OyJ9