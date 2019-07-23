import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoeService } from '../../../shoes-service/shoe.service';
import { NewRelease } from '../../../models/new-release.interface';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {

  newRelease: Observable<any[]>;

  constructor(
    private shoeService: ShoeService) { }

  ngOnInit() {
      this.newRelease = this.shoeService.getShoesNews();
  }

}
