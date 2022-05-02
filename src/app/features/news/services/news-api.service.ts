import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsModel, PostModel } from '../models/news.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getNews(): Observable<PostModel[]> {
    return this.http.get<NewsModel>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=96b40ede51ef461c8aa7d5cb99b92ea7')
      .pipe(map(response => response.articles));
  }
}
