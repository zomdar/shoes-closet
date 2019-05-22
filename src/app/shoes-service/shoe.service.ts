import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoe } from '../types';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  shoes: Observable<Shoe[]>;

  constructor(private http: HttpClient) {
    this.getShoes();
  }

  private getShoes() {
    this.shoes = this.http.get<Shoe[]>('assets/shoes.json').pipe(
      share()
    );
  }

  private createShoes( shoes: Shoe[]) {

  }


}
