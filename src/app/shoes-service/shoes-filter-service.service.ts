import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterState, Filter, Option } from '../types';
import {  Shoe } from '../models/shoes.interface';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

import { ShoeService } from '../shoes-service/shoe.service';

@Injectable({
  providedIn: 'root'
})
export class ShoesFilterService {
  shoes: Observable<Shoe[]>;
  filterState: FilterState = {};
  filters: Observable<Filter[]>;
  _db:AngularFirestore;

  constructor(http: HttpClient, db: AngularFirestore, private shoeService: ShoeService) {
    this._db = db;
    this.shoes = this.shoeService.getShoes();
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
