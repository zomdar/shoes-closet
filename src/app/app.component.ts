import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ShoeService } from './shoes-service/shoe.service';
import { Observable } from 'rxjs';
import { Shoe, } from './types';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoes: Observable<Shoe[]>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(shoeService: ShoeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.shoes = shoeService.shoes;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
