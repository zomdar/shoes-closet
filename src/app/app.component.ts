import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Shoe } from '../app/models/shoes.interface';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from './auth-service/auth-service.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchModel: Shoe;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    public dialog: MatDialog, 
    public auth: AuthService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  userLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px'
    });
  }

  userLogOut(): void {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

  updateSearchModel(event: Shoe) {
    this.searchModel = event;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
