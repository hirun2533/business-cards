import { Businesscard } from './/businesscard.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BusinesscardsService {
  private data = 'businesscards';
  Cards: Observable<Businesscard[]>;
  FirestoreCards: AngularFirestoreCollection<Businesscard>;

  constructor(private afstore: AngularFirestore, private router:Router) {
    this.FirestoreCards = afstore.collection<Businesscard>(this.data);
    this.Cards = this.FirestoreCards.valueChanges();
  }
  generateCards(): AngularFirestoreCollection<Businesscard> {
    return this.FirestoreCards;
  }

  updateservice(cardNum: string, Cardupdate: Businesscard): Promise<void> {
  
    return this.FirestoreCards.doc(cardNum).update(Cardupdate);
  }

  deleteservice(cardNum: string): Promise<void> {
    return this.FirestoreCards.doc(cardNum).delete();
  }
  addservice(newcard: Businesscard): Promise<void> {
    const cardNum = this.afstore.createId();
    newcard.num = cardNum;
    return this.FirestoreCards.doc(cardNum).set(Object.assign({}, newcard));
  }



}
