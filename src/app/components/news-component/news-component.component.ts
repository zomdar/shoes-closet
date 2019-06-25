import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss']
})
export class NewsComponentComponent implements OnInit {

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
