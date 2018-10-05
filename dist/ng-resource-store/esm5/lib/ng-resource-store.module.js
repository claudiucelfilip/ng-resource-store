/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgResourceStoreDirective } from './ng-resource-store.directive';
import { ResourceStore } from 'resource-store';
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
export { NgResourceStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcmVzb3VyY2Utc3RvcmUvIiwic291cmNlcyI6WyJsaWIvbmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBb0IsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakU7SUFBQTtJQWlCQSxDQUFDOzs7OztJQVpRLDhCQUFROzs7O0lBQWYsVUFBZ0IsT0FBTzs7WUFDakIsS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0QyxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSztpQkFDeEI7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUN4QyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDcEM7O0lBY0QsNEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmUgfSBmcm9tICcuL25nLXJlc291cmNlLXN0b3JlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJUmVzb3VyY2VPcHRpb25zLCBSZXNvdXJjZVN0b3JlIH0gZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuaW1wb3J0ICogYXMgU29yZVByb3BzIGZyb20gJ3Jlc291cmNlLXN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdSZXNvdXJjZVN0b3JlTW9kdWxlIHtcbiAgc3RhdGljIGZvclN0b3JlKG9wdGlvbnMpIHtcbiAgICBsZXQgc3RvcmUgPSBuZXcgUmVzb3VyY2VTdG9yZShvcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nUmVzb3VyY2VTdG9yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IFxuICAgICAgICAgIHByb3ZpZGU6IFJlc291cmNlU3RvcmUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4gc3RvcmVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19