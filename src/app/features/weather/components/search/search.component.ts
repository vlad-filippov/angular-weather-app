import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public searchValue: string;
  @Output() public searchOutput: EventEmitter<string> = new EventEmitter<string>();
}
