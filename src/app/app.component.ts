import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
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

  shoes: Observable<Shoe[]>;
  shoeService;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(shoeService: ShoeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.shoes = shoeService.getShoes();
    this.shoeService = shoeService;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  openAddShoeModal(): void {
    const dialogRef = this.dialog.open(AddShoeContainerComponent, {
      width: '380px'
    });
  }

  deleteShoe(id: string, name: string): void {
    const dialogRef = this.dialog.open(DeleteShoeModalComponent, {
      width: '380px',
      data: {id: id, shoeName: name}
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
