import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoe } from '../models/shoes.interface';
import { NewRelease } from '../models/new-release.interface';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { tap, map, share } from 'rxjs/operators';

import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  shoes: Observable<Shoe[]> = null;
  newRelease: Observable<NewRelease[]> = null;
  _db: AngularFirestore;
  userId: string;

  constructor(
    private afAuth: AngularFireAuth,
    db: AngularFirestore
  ) {
    this._db = db;
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  public getShoesNews(): Observable<any[]> {
    return this._db.collection('/news').doc('/release').collection('/sneakers')
                  .snapshotChanges()
                  .pipe(
                    map((actions: DocumentChangeAction<NewRelease>[]) => {
                      return actions.map((a: DocumentChangeAction<NewRelease>) => {
                        const data: Object = a.payload.doc.data() as NewRelease;
                        const id = a.payload.doc.id;
                        return { id, ...data };
                      });
                    }),
                  );
  }

  public getShoes(): Observable<any[]> {
    return this._db.collection('/shoes').doc(`${this.userId}`).collection('/shoesCollection')
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

  public createShoes(shoe: Shoe) {
    const id = this._db.createId();
    this._db.collection('/shoes').doc(`${this.userId}`).collection('/shoesCollection').doc(id).set(shoe);
  }

  public updateShoe(shoe: Shoe, shoeId: string){
    this._db.collection('/shoes').doc(`${this.userId}`).collection('/shoesCollection').doc(shoeId).update(shoe);
  }

  public deleteShoe(shoeId: string){
    this._db.collection('/shoes').doc(`${this.userId}`).collection('/shoesCollection').doc(shoeId).delete();
  }

}
