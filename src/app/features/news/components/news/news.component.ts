import { Component } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';
import { Observable } from 'rxjs';
import { PostModel } from '../../models/news.model';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  public news$: Observable<PostModel[]>;

  constructor(
    public dialog: MatDialog,
    private newsApiService: NewsApiService,
  ) {
    this.news$ = this.newsApiService.getNews();
  }

  public openDialog(post: PostModel): void {
    this.dialog.open(PostComponent, { width: '500px', data: { ...post, isDialog: true } });
  }
}
