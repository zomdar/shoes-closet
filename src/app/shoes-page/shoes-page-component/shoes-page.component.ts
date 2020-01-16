import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { AddLinksContainerComponent } from '../add-links/add-links-container/add-links-container.component';

import { ShoeService } from '../../shoes-service/shoe.service';

@Component({
  selector: 'app-shoes-page',
  templateUrl: './shoes-page.component.html',
  styleUrls: ['./shoes-page.component.scss']
})
export class ShoesPageComponent implements OnInit {
  
  @Input()
  shoeInfoModel;

  shoeId: string;

  constructor(
    public dialog: MatDialog, 
    private activatedRoute: ActivatedRoute,
    private shoeService: ShoeService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.shoeId = params['shoeId'];
    });
  }

  ngOnChanges() {
  }

  onClickShoeLink(link: string) {
    window.open(link);
  }

  onClickAddLink() {
    const dialogRef = this.dialog.open(AddLinksContainerComponent, {
      width: '380px',
      data: {}
    });
  }

  onClickDeleteLink(shoeLink) {
    this.shoeService.deleteShoesNewsLinks(shoeLink, this.shoeId);
  }

}
