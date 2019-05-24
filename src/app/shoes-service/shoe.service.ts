import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoe } from '../models/shoes.interface';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  shoes: Observable<any[]>;
  _db:AngularFirestore;

  constructor(private http: HttpClient, db: AngularFirestore) {
    this._db = db;
    this.getShoes();
  }

  
  public getShoes() {
    this.shoes = this._db.collection('/shoes').valueChanges().pipe(
      share()
    );
  }

  public createShoes(shoe: Shoe) {
    this._db.collection('/shoes').add(shoe);
  }

}
