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
             */ function (key) {
                /** @type {?} */
                var resource;
                if (key instanceof resourceStore.Resource) {
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
            { type: i0.Directive, args: [{
                        selector: '[rsResource]'
                    },] },
        ];
        NgResourceStoreDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef },
                { type: i0.ViewContainerRef },
                { type: resourceStore.ResourceStore }
            ];
        };
        NgResourceStoreDirective.propDecorators = {
            rsResourceFrom: [{ type: i0.Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1yZXNvdXJjZS1zdG9yZS9saWIvbmctcmVzb3VyY2Utc3RvcmUuc2VydmljZS50cyIsIm5nOi8vbmctcmVzb3VyY2Utc3RvcmUvbGliL25nLXJlc291cmNlLXN0b3JlLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmctcmVzb3VyY2Utc3RvcmUvbGliL25nLXJlc291cmNlLXN0b3JlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUmVzb3VyY2VTdG9yZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzb3VyY2VTdG9yZSwgUmVzb3VyY2UgfSBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQ29udGV4dCBleHRlbmRzIFJlc291cmNlIHtcbiAgJGltcGxpY2l0PzogYW55O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcnNSZXNvdXJjZV0nXG59KVxuZXhwb3J0IGNsYXNzIE5nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZSB7XG4gIGNvbnRleHQ6IFJlc291cmNlQ29udGV4dDtcbiAgc2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRwbDogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2Y2Y6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgc3RvcmU6IFJlc291cmNlU3RvcmUpIHtcbiAgfVxuXG4gIG5nT25Jbml0ICgpIHtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCByc1Jlc291cmNlRnJvbSAoa2V5OiBzdHJpbmcgfCBSZXNvdXJjZSkge1xuICAgIGxldCByZXNvdXJjZTogUmVzb3VyY2VDb250ZXh0O1xuICAgIGlmIChrZXkgaW5zdGFuY2VvZiBSZXNvdXJjZSkge1xuICAgICAgcmVzb3VyY2UgPSBrZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc291cmNlID0gdGhpcy5zdG9yZS5nZXQoa2V5KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSByZXNvdXJjZTtcbiAgICB0aGlzLmNvbnRleHQuJGltcGxpY2l0ID0gcmVzb3VyY2U7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpZXcgKCkge1xuICAgIHRoaXMudmNmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRwbCwgdGhpcy5jb250ZXh0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElSZXNvdXJjZU9wdGlvbnMsIFJlc291cmNlU3RvcmUgfSBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5pbXBvcnQgKiBhcyBTb3JlUHJvcHMgZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yU3RvcmUob3B0aW9ucykge1xuICAgIGxldCBzdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdSZXNvdXJjZVN0b3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgcHJvdmlkZTogUmVzb3VyY2VTdG9yZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiBzdG9yZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIlJlc291cmNlIiwiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJWaWV3Q29udGFpbmVyUmVmIiwiUmVzb3VyY2VTdG9yZSIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7cUNBSkQ7S0FRQzs7Ozs7O0FDUkQ7UUFlRSxrQ0FBb0IsR0FBcUIsRUFBVSxHQUFxQixFQUFVLEtBQW9CO1lBQWxGLFFBQUcsR0FBSCxHQUFHLENBQWtCO1lBQVUsUUFBRyxHQUFILEdBQUcsQ0FBa0I7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFlO1lBRHRHLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1NBRTNCOzs7O1FBRUQsMkNBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtRQUVELHNCQUNJLG9EQUFjOzs7O2dCQURsQixVQUNvQixHQUFzQjs7b0JBQ3BDLFFBQXlCO2dCQUM3QixJQUFJLEdBQUcsWUFBWUMsc0JBQVEsRUFBRTtvQkFDM0IsUUFBUSxHQUFHLEdBQUcsQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0wsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQztnQkFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQ25DOzs7V0FBQTs7OztRQUVPLDZDQUFVOzs7WUFBbEI7Z0JBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyRDs7b0JBNUJGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGNBQWM7cUJBQ3pCOzs7O3dCQVhtQkMsY0FBVzt3QkFBcUJDLG1CQUFnQjt3QkFDM0RDLDJCQUFhOzs7O3FDQXFCbkJDLFFBQUs7O1FBZ0JSLCtCQUFDO0tBQUE7Ozs7OztBQ3RDRDtRQUtBO1NBaUJDOzs7OztRQVpRLDhCQUFROzs7O1lBQWYsVUFBZ0IsT0FBTzs7b0JBQ2pCLEtBQUssR0FBRyxJQUFJRCwyQkFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDdEMsT0FBTztvQkFDTCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFQSwyQkFBYTs0QkFDdEIsVUFBVSxFQUFFLGNBQU0sT0FBQSxLQUFLLEdBQUE7eUJBQ3hCO3FCQUNGO2lCQUNGLENBQUE7YUFDRjs7b0JBaEJGRSxXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO3FCQUNwQzs7UUFjRCw0QkFBQztLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=