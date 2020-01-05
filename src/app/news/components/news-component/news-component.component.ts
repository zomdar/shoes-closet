import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';

import{ NewReleaseShoeModalContainerComponent } from '../../new-release-shoe-modal/containers/new-release-shoe-modal-container/new-release-shoe-modal-container.component';

import { NewRelease } from '../../../models/new-release.interface';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.scss']
})
export class NewsComponentComponent implements OnInit {

  @Input()
  releaseDetail: NewRelease;
  
  private _mobileQueryListener: () => void;

  mobileQuery: MediaQueryList;


  collapsed = true;

  constructor(media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  

  ngOnInit() {
  }

  openAddShoeModal(id: string, name: string, edit: boolean): void {
    const dialogRef = this.dialog.open(NewReleaseShoeModalContainerComponent, {
      width: '380px',
      data: {id: id, shoeName: name, isEdit: edit}
    });
  }

  onClickCard() {
    console.log('modal click');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
