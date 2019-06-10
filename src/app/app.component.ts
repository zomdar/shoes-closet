import { ChangeDetectorRef, Component, OnDestroy, Input } from '@angular/core';
import { ShoeService } from './shoes-service/shoe.service';
import { Observable } from 'rxjs';
import { Shoe } from '../app/models/shoes.interface';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';

import { AddShoeContainerComponent } from './containers/add-shoe-container/add-shoe-container.component';
import { DeleteShoeModalComponent } from './delete-shoe-modal/delete-shoe-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchModel: Shoe;
  shoes: Observable<Shoe[]>;
  shoeService;
  mobileQuery: MediaQueryList;
  editShoe: boolean;

  private _mobileQueryListener: () => void;

  constructor(shoeService: ShoeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.shoes = shoeService.getShoes();
    this.shoeService = shoeService;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  openAddShoeModal(id: string, name: string, edit: boolean): void {
    const dialogRef = this.dialog.open(AddShoeContainerComponent, {
      width: '380px',
      data: {id: id, shoeName: name, isEdit: edit}
    });
  }

  deleteShoe(id: string, name: string): void {
    const dialogRef = this.dialog.open(DeleteShoeModalComponent, {
      width: '380px',
      data: {id: id, shoeName: name}
    });
  }

  updateSearchModel(event: Shoe) {
    this.searchModel = event;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
