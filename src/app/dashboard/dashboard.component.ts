import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';

import { AddShoeContainerComponent } from '../add-shoe/containers/add-shoe-container/add-shoe-container.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
  }

  openAddShoeModal(id: string, name: string, edit: boolean): void {
    const dialogRef = this.dialog.open(AddShoeContainerComponent, {
      width: '380px',
      data: {id: id, shoeName: name, isEdit: edit}
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
