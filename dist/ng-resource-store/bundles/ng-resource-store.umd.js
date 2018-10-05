(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('resource-store')) :
    typeof define === 'function' && define.amd ? define('ng-resource-store', ['exports', '@angular/core', 'resource-store'], factory) :
    (factory((global['ng-resource-store'] = {}),global.ng.core,null));
}(this, (function (exports,i0,resourceStore) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgResourceStoreService = (function () {
        function NgResourceStoreService() {
        }
        NgResourceStoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        NgResourceStoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgResourceStoreService.ngInjectableDef = i0.defineInjectable({ factory: function NgResourceStoreService_Factory() { return new NgResourceStoreService(); }, token: NgResourceStoreService, providedIn: "root" });
        return NgResourceStoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgResourceStoreDirective = (function () {
        function NgResourceStoreDirective(tpl, vcf) {
            this.tpl = tpl;
            this.vcf = vcf;
            this.vcf.createEmbeddedView(this.tpl);
        }
        NgResourceStoreDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[rsResource]'
                    },] },
        ];
        NgResourceStoreDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef },
                { type: i0.ViewContainerRef }
            ];
        };
        return NgResourceStoreDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgResourceStoreModule = (function () {
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
                var store = new resourceStore.ResourceStore(options);
                return {
                    ngModule: NgResourceStoreModule,
                    providers: [
                        {
                            provide: resourceStore.ResourceStore,
                            useFactory: function () { return store; }
                        }
                    ]
                };
            };
        NgResourceStoreModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.NgResourceStoreService = NgResourceStoreService;
    exports.NgResourceStoreModule = NgResourceStoreModule;
    exports.NgResourceStoreDirective = NgResourceStoreDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUuc2VydmljZS50cyIsIm5nOi8vbmctcmVzb3VyY2Utc3RvcmUvbGliL25nLXJlc291cmNlLXN0b3JlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctcmVzb3VyY2Utc3RvcmUvbGliL25nLXJlc291cmNlLXN0b3JlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUmVzb3VyY2VTdG9yZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyc1Jlc291cmNlXSdcbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cGw6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgdmNmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgdGhpcy52Y2YuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudHBsKTtcbiAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmUgfSBmcm9tICcuL25nLXJlc291cmNlLXN0b3JlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJUmVzb3VyY2VPcHRpb25zLCBSZXNvdXJjZVN0b3JlIH0gZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuaW1wb3J0ICogYXMgU29yZVByb3BzIGZyb20gJ3Jlc291cmNlLXN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlTW9kdWxlIHtcbiAgc3RhdGljIGZvclN0b3JlKG9wdGlvbnMpIHtcbiAgICBsZXQgc3RvcmUgPSBuZXcgUmVzb3VyY2VTdG9yZShvcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nUmVzb3VyY2VTdG9yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IFxuICAgICAgICAgIHByb3ZpZGU6IFJlc291cmNlU3RvcmUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4gc3RvcmVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJSZXNvdXJjZVN0b3JlIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7cUNBSkQ7S0FRQzs7Ozs7O0FDUkQ7UUFNRSxrQ0FBb0IsR0FBcUIsRUFBVSxHQUFxQjtZQUFwRCxRQUFHLEdBQUgsR0FBRyxDQUFrQjtZQUFVLFFBQUcsR0FBSCxHQUFHLENBQWtCO1lBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDOztvQkFORkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3FCQUN6Qjs7Ozt3QkFKbUJDLGNBQVc7d0JBQUVDLG1CQUFnQjs7O1FBU2pELCtCQUFDO0tBQUE7Ozs7OztBQ1REO1FBS0E7U0FpQkM7Ozs7O1FBWlEsOEJBQVE7Ozs7WUFBZixVQUFnQixPQUFPOztvQkFDakIsS0FBSyxHQUFHLElBQUlDLDJCQUFhLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxPQUFPO29CQUNMLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUVBLDJCQUFhOzRCQUN0QixVQUFVLEVBQUUsY0FBTSxPQUFBLEtBQUssR0FBQTt5QkFDeEI7cUJBQ0Y7aUJBQ0YsQ0FBQTthQUNGOztvQkFoQkZDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7cUJBQ3BDOztRQWNELDRCQUFDO0tBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==