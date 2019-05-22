import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ShoeService } from './shoe.service';
import { Observable } from 'rxjs';
import { Shoe, FilterState, Filter, Option } from './types';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoes: Observable<Shoe[]>;
  filterState: FilterState;
  filters: Observable<Filter[]>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(shoeService: ShoeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.shoes = shoeService.shoes;
    this.filterState = shoeService.filterState;
    this.filters = shoeService.filters;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
