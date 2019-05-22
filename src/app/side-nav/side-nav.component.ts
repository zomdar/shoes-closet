import { Component } from '@angular/core';
import { ShoeService } from '../shoes-service/shoe.service';
import { Observable } from 'rxjs';
import { Shoe, FilterState, Filter, Option } from '../types';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  shoes: Observable<Shoe[]>;
  filterState: FilterState;
  filters: Observable<Filter[]>;

  constructor(shoeService: ShoeService) {
    this.shoes = shoeService.shoes;
    this.filterState = shoeService.filterState;
    this.filters = shoeService.filters;
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }
}
