/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgResourceStoreDirective } from './ng-resource-store.directive';
import { ResourceStore } from 'resource-store';
export class NgResourceStoreModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcmVzb3VyY2Utc3RvcmUvIiwic291cmNlcyI6WyJsaWIvbmctcmVzb3VyY2Utc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBb0IsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPakUsTUFBTTs7Ozs7SUFDSixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU87O1lBQ2pCLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDdEMsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLO2lCQUN4QjthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQWhCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVzb3VyY2VTdG9yZURpcmVjdGl2ZSB9IGZyb20gJy4vbmctcmVzb3VyY2Utc3RvcmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElSZXNvdXJjZU9wdGlvbnMsIFJlc291cmNlU3RvcmUgfSBmcm9tICdyZXNvdXJjZS1zdG9yZSc7XG5pbXBvcnQgKiBhcyBTb3JlUHJvcHMgZnJvbSAncmVzb3VyY2Utc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ1Jlc291cmNlU3RvcmVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmdSZXNvdXJjZVN0b3JlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Jlc291cmNlU3RvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yU3RvcmUob3B0aW9ucykge1xuICAgIGxldCBzdG9yZSA9IG5ldyBSZXNvdXJjZVN0b3JlKG9wdGlvbnMpO1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdSZXNvdXJjZVN0b3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgXG4gICAgICAgICAgcHJvdmlkZTogUmVzb3VyY2VTdG9yZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiAoKSA9PiBzdG9yZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iXX0=