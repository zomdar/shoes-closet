import { Component, OnInit, Input } from '@angular/core';

import { NewRelease } from '../../models/new-release.interface';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss']
})
export class NewsComponentComponent implements OnInit {

  @Input()
  releaseDetail: NewRelease;

  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
