import { Component } from '@angular/core';
import { ShoesFilterService } from '../shoes-service/shoes-filter-service.service';
import { Observable } from 'rxjs';
import { FilterState, Filter, Option } from '../types';
import { Shoe } from '../models/shoes.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  shoes: Observable<Shoe[]>;
  filterState: FilterState;
  filters: Observable<Filter[]>;

  constructor(shoeFilterService: ShoesFilterService) {
    this.shoes = shoeFilterService.shoes;
    this.filterState = shoeFilterService.filterState;
    this.filters = shoeFilterService.filters;
  }

  changeFilter(category: string, option: Option) {
    this.filterState[category] = option;
  }
}
