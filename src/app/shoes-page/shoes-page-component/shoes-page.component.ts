import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoes-page',
  templateUrl: './shoes-page.component.html',
  styleUrls: ['./shoes-page.component.scss']
})
export class ShoesPageComponent implements OnInit {

  @Input()
  shoeInfoModel;

  constructor() { }

  ngOnInit() {
  }

}
