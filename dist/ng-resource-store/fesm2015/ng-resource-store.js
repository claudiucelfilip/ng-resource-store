import { Injectable, NgModule, Directive, TemplateRef, Input, ViewContainerRef, defineInjectable } from '@angular/core';
import { ResourceStore, Resource } from 'resource-store';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLXJlc291cmNlLXN0b3JlL2xpYi9uZy1yZXNvdXJjZS1zdG9yZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVN0b3JlLCBSZXNvdXJjZSB9IGZyb20gJ3Jlc291cmNlLXN0b3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VDb250ZXh0IGV4dGVuZHMgUmVzb3VyY2Uge1xuICAkaW1wbGljaXQ/OiBhbnk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyc1Jlc291cmNlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIHtcbiAgY29udGV4dDogUmVzb3VyY2VDb250ZXh0O1xuICBzZWxlY3RlZEtleXM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZjZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBzdG9yZTogUmVzb3VyY2VTdG9yZSkge1xuICB9XG5cbiAgbmdPbkluaXQgKCkge1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJzUmVzb3VyY2VGcm9tIChrZXk6IHN0cmluZyB8IFJlc291cmNlKSB7XG4gICAgbGV0IHJlc291cmNlOiBSZXNvdXJjZUNvbnRleHQ7XG4gICAgaWYgKGtleSBpbnN0YW5jZW9mIFJlc291cmNlKSB7XG4gICAgICByZXNvdXJjZSA9IGtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb3VyY2UgPSB0aGlzLnN0b3JlLmdldChrZXkpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dCA9IHJlc291cmNlO1xuICAgIHRoaXMuY29udGV4dC4kaW1wbGljaXQgPSByZXNvdXJjZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldyAoKSB7XG4gICAgdGhpcy52Y2YuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudHBsLCB0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1yZXNvdXJjZS1zdG9yZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSVJlc291cmNlT3B0aW9ucywgUmVzb3VyY2VTdG9yZSB9IGZyb20gJ3Jlc291cmNlLXN0b3JlJztcbmltcG9ydCAqIGFzIFNvcmVQcm9wcyBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIE5nUmVzb3VyY2VTdG9yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JTdG9yZShvcHRpb25zKSB7XG4gICAgbGV0IHN0b3JlID0gbmV3IFJlc291cmNlU3RvcmUob3B0aW9ucyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ1Jlc291cmNlU3RvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBcbiAgICAgICAgICBwcm92aWRlOiBSZXNvdXJjZVN0b3JlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IHN0b3JlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7OztZQUxsQixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7OztBQ0pEOzs7Ozs7SUFlRSxZQUFvQixHQUFxQixFQUFVLEdBQXFCLEVBQVUsS0FBb0I7UUFBbEYsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWU7UUFEdEcsaUJBQVksR0FBYSxFQUFFLENBQUM7S0FFM0I7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksY0FBYyxDQUFFLEdBQXNCOztZQUNwQyxRQUF5QjtRQUM3QixJQUFJLEdBQUcsWUFBWSxRQUFRLEVBQUU7WUFDM0IsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNoQjthQUFNO1lBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0tBQ25DOzs7O0lBRU8sVUFBVTtRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3JEOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7WUFYbUIsV0FBVztZQUFxQixnQkFBZ0I7WUFDM0QsYUFBYTs7OzZCQXFCbkIsS0FBSzs7Ozs7OztBQ3RCUjs7Ozs7SUFVRSxPQUFPLFFBQVEsQ0FBQyxPQUFPOztZQUNqQixLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLE1BQU0sS0FBSztpQkFDeEI7YUFDRjtTQUNGLENBQUE7S0FDRjs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEM7Ozs7Ozs7Ozs7Ozs7OzsifQ==