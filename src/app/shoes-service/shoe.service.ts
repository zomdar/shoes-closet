import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoe } from '../models/shoes.interface';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  shoes: Observable<Shoe[]>;
  _db: AngularFirestore;

  constructor(private http: HttpClient, db: AngularFirestore) {
    this._db = db;
  }
  
  public getShoes(): Observable<any[]> {
    return this._db.collection('/shoes')
                  .snapshotChanges()
                  .pipe(
                    map((actions: DocumentChangeAction<Shoe>[]) => {
                      return actions.map((a: DocumentChangeAction<Shoe>) => {
                        const data: Object = a.payload.doc.data() as Shoe;
                        const id = a.payload.doc.id;
                        return { id, ...data };
                      });
                    }),
                  );
  }

  public getShoe(id: string): Observable<any> {
    const shoesDocuments = this._db.doc('/shoes/' + '6F2XhVLJl99iIe2n6sKA');
    return shoesDocuments.snapshotChanges()
                        .pipe(
                          share()
                        );
                        // .pipe(
                        //   map((response: Response) => response.json());
                        // );
  }

  public createShoes(shoe: Shoe) {
    this._db.collection('/shoes').add(shoe);
  }

  public updateShoe(shoe: Shoe, shoeId: string){
    this._db.doc('/shoes/' + shoeId).update(shoe);
  }

  public deleteShoe(shoeId: string){
    this._db.doc('/shoes/' + shoeId).delete();
  }

}
