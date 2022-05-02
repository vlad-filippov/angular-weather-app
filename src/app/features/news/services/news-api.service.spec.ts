import { TestBed } from '@angular/core/testing';
import { NewsApiService } from './news-api.service';
import { HttpClient } from '@angular/common/http';

describe('NewsApiService', () => {
  let service: NewsApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // ApiModule.forRoot({
        //   baseUrl: '',
        //   production: false,
        //   onAuthError: () => {
        //   },
        // }),
        // AuthModule.forRoot({ baseUrl: '', production: false }),
      ],
      providers: [
        // ...defaultProviders,
        NewsApiService,
        HttpClient,
      ],
    });

    service = TestBed.inject(NewsApiService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
