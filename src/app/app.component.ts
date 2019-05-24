import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ShoeService } from './shoes-service/shoe.service';
import { Observable } from 'rxjs';
import { Shoe } from '../app/models/shoes.interface';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { AddShoeModalComponent } from './add-shoe-modal/add-shoe-modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoes: Observable<Shoe[]>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(shoeService: ShoeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.shoes = shoeService.shoes;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  openAddShoeModal(): void {
    const dialogRef = this.dialog.open(AddShoeModalComponent, {
      width: '380px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
