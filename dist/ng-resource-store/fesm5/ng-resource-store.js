import { Injectable, NgModule, Directive, TemplateRef, Input, ViewContainerRef, defineInjectable } from '@angular/core';
import { ResourceStore, Resource } from 'resource-store';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXJlc291cmNlLXN0b3JlL2xpYi9uZy1yZXNvdXJjZS1zdG9yZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0b3JlLCBSZXNvdXJjZSB9IGZyb20gJ3Jlc291cmNlLXN0b3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VDb250ZXh0IGV4dGVuZHMgUmVzb3VyY2Uge1xuICAkaW1wbGljaXQ/OiBhbnk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyc1Jlc291cmNlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIHtcbiAgY29udGV4dDogUmVzb3VyY2VDb250ZXh0O1xuICBzZWxlY3RlZEtleXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZjZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzdG9yZTogUmVzb3VyY2VTdG9yZSkge1xuICB9XG5cbiAgbmdPbkluaXQgKCkge1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJzUmVzb3VyY2VGcm9tIChrZXk6IHN0cmluZyB8IFJlc291cmNlKSB7XG4gICAgbGV0IHJlc291cmNlOiBSZXNvdXJjZUNvbnRleHQ7XG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIFJlc291cmNlKSB7XG4gICAgICByZXNvdXJjZSA9IGtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb3VyY2UgPSB0aGlzLnN0b3JlLmdldChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IHJlc291cmNlO1xuICAgIHRoaXMuY29udGV4dC4kaW1wbGljaXQgPSByZXNvdXJjZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldyAoKSB7XG4gICAgdGhpcy52Y2YuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudHBsLCB0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1yZXNvdXJjZS1zdG9yZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSVJlc291cmNlT3B0aW9ucywgUmVzb3VyY2VTdG9yZSB9IGZyb20gJ3Jlc291cmNlLXN0b3JlJztcbmltcG9ydCAqIGFzIFNvcmVQcm9wcyBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5nUmVzb3VyY2VTdG9yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JTdG9yZShvcHRpb25zKSB7XG4gICAgbGV0IHN0b3JlID0gbmV3IFJlc291cmNlU3RvcmUob3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ1Jlc291cmNlU3RvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBcbiAgICAgICAgICBwcm92aWRlOiBSZXNvdXJjZVN0b3JlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IHN0b3JlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7aUNBSkQ7Q0FRQzs7Ozs7O0FDUkQ7SUFlRSxrQ0FBb0IsR0FBcUIsRUFBVSxHQUFxQixFQUFVLEtBQW9CO1FBQWxGLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBRHRHLGlCQUFZLEdBQWEsRUFBRSxDQUFDO0tBRTNCOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25CO0lBRUQsc0JBQ0ksb0RBQWM7Ozs7O1FBRGxCLFVBQ29CLEdBQXNCOztnQkFDcEMsUUFBeUI7WUFDN0IsSUFBSSxHQUFHLFlBQVksUUFBUSxFQUFFO2dCQUMzQixRQUFRLEdBQUcsR0FBRyxDQUFDO2FBQ2hCO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUNuQzs7O09BQUE7Ozs7SUFFTyw2Q0FBVTs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyRDs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7OztnQkFYbUIsV0FBVztnQkFBcUIsZ0JBQWdCO2dCQUMzRCxhQUFhOzs7aUNBcUJuQixLQUFLOztJQWdCUiwrQkFBQztDQUFBOzs7Ozs7QUN0Q0Q7SUFLQTtLQWlCQzs7Ozs7SUFaUSw4QkFBUTs7OztJQUFmLFVBQWdCLE9BQU87O1lBQ2pCLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUssR0FBQTtpQkFDeEI7YUFDRjtTQUNGLENBQUE7S0FDRjs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3BDOztJQWNELDRCQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7OyJ9