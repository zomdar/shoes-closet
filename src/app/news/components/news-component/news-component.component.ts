import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { NewReleaseShoeModalContainerComponent } from '../../new-release-shoe-modal/containers/new-release-shoe-modal-container/new-release-shoe-modal-container.component';
import { DeleteShoeModalComponent } from '../../../delete-shoe-modal/delete-shoe-modal.component';

import { AuthService } from '../../../authentication/auth-service.service';

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

  constructor(media: MediaMatcher, public dialog: MatDialog, public authService: AuthService, public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
  }
  
  ngOnChanges() {
  }
  
  openAddShoeModal(id: string, name: string, edit: boolean): void {
    const dialogRef = this.dialog.open(NewReleaseShoeModalContainerComponent, {
      width: '500px',
      data: {id: id, shoeName: name, isEdit: edit}
    });
  }
  
  onClickCard(id: string) {
    this.router.navigate(['/shoes'], { queryParams: { shoeId: id } });
  }

  deleteShoe(id: string, name: string) {
    const dialogRef = this.dialog.open(DeleteShoeModalComponent, {
      width: '380px',
      data: {id: id, shoeName: name}
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
