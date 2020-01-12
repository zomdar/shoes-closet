import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AddLinksComponent } from '../add-links/add-links.component';

@Component({
  selector: 'app-shoes-page',
  templateUrl: './shoes-page.component.html',
  styleUrls: ['./shoes-page.component.scss']
})
export class ShoesPageComponent implements OnInit {
  
  @Input()
  shoeInfoModel;

  shoes: Array<any> = [
    {
      name: 'link-1',
      link: 'http://www.google.com'
    },
    {
      name: 'link-2',
      link: 'http://www.google.com'
    },
    {
      name: 'link-3',
      link: 'http://www.google.com'
    }
  ] 

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  onClickShoeLink(link: string) {
    window.open(link);
  }

  onClickAddLink() {
    const dialogRef = this.dialog.open(AddLinksComponent, {
      width: '380px',
      data: {}
    });
  }

}
