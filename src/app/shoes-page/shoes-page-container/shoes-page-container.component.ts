import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShoeService } from '../../shoes-service/shoe.service';

@Component({
  selector: 'app-shoes-page-container',
  templateUrl: './shoes-page-container.component.html',
  styleUrls: ['./shoes-page-container.component.scss']
})
export class ShoesPageContainerComponent implements OnInit {

  shoeId: string;
  shoeInfo;

  constructor(private activatedRoute: ActivatedRoute, private shoeService: ShoeService) { }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
        this.shoeId = params['shoeId'];
      });

      this.shoeService.getShoesNews()
        .subscribe((snapshot) => {
          snapshot.forEach(doc => {
            if(doc.id === this.shoeId) {
              this.shoeInfo = doc;
              return doc;
            }
          });
      });
  }

}
