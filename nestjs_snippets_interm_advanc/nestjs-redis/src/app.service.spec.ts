import { CACHE_MANAGER } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppService } from "./app.service"

// mock the cachemanger built in methods
const mockCacheManager = {
    set: jest.fn(),
    get: jest.fn(),
    del: jest.fn(),
    reset: jest.fn(),
}

describe('AppService',()=>{
    let appService: AppService;

    beforeEach(async()=>{
        const moduleRef = await Test.createTestingModule({
            imports: [],
            controllers: [],
            providers: [
                // instantiate the AppService
                AppService,
                // and access the CacheManager to mock the inmemory cache
                {
                    provide: CACHE_MANAGER,
                    useValue: mockCacheManager,
                }
            ]
        }).compile(); // compile the testing module
        // update appService instance with our custom module compiled just now
        appService = moduleRef.get<AppService>(AppService);      
    });
    // 1st test case
    it('Mock AppService should be defined',()=>{
        expect(appService).toBeDefined();
    });
});