// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { NewsComponent } from './components/news/news.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    NewsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MatDialogModule,
  ],
})
export class NewsModule {
}
