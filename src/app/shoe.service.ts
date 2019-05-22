import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterState, Filter, Option, Shoe } from './types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  shoes: Observable<Shoe[]>;
  filterState: FilterState = {};
  filters: Observable<Filter[]>;

  constructor(http: HttpClient) {
    this.shoes = http.get<Shoe[]>('assets/shoes.json').pipe(
      share()
    );
    this.filters = this.shoes.pipe(
      map(shoes => this.createFilters(shoes))
    );
  }

  private createFilters( shoes: Shoe[]) {
    return [{
      category: 'brand',
      displayName: 'Brand',
      options: this.extractFilterOptions('brand', shoes)
    }, {
      category: 'year',
      displayName: 'Year',
      options: this.extractFilterOptions('year', shoes)
    }];
  }

  private extractFilterOptions(category: string, shoes: Shoe[]): Option[] {
    this.filterState[category] = '';
    return _.chain(shoes)
      .groupBy(category)
      .keys()
      .sort()
      .value();
  }
}
