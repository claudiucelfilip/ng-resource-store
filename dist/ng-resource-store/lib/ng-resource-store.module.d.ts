import { ResourceStore } from 'resource-store';
export declare class NgResourceStoreModule {
    static forStore(options: any): {
        ngModule: typeof NgResourceStoreModule;
        providers: {
            provide: typeof ResourceStore;
            useFactory: () => ResourceStore;
        }[];
    };
}
