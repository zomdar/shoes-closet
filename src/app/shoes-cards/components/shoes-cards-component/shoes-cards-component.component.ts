import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from '../../../models/shoes.interface';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';

import { DeleteShoeModalComponent } from '../../../delete-shoe-modal/delete-shoe-modal.component';
import { AddShoeContainerComponent } from '../../../add-shoe/containers/add-shoe-container/add-shoe-container.component';

@Component({
  selector: 'app-shoes-cards-component',
  templateUrl: './shoes-cards-component.component.html',
  styleUrls: ['./shoes-cards-component.component.scss']
})
export class ShoesCardsComponentComponent implements OnInit {

  @Input()
  cardDetail: Shoe;

  searchModel: Shoe;
  mobileQuery: MediaQueryList;
  editShoe: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
  }

  deleteShoe(id: string, name: string): void {
    const dialogRef = this.dialog.open(DeleteShoeModalComponent, {
      width: '380px',
      data: {id: id, shoeName: name}
    });
  }

  openAddShoeModal(id: string, name: string, edit: boolean): void {
    const dialogRef = this.dialog.open(AddShoeContainerComponent, {
      width: '380px',
      data: {id: id, shoeName: name, isEdit: edit}
    });
  }

}
