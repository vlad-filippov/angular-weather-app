import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostModel } from '../../models/news.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PostModel) {
  }
}
