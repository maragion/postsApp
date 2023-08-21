import {Component, EventEmitter, Input, Output} from '@angular/core';
import {post} from "../../postsInterface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class TableComponent{
  @Input() data: post[] = []
  @Output() postId = new EventEmitter()

}
