import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { BusinesscardsService } from '../businesscards.service';
import { Businesscard } from '../businesscard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {
  Cards: Businesscard[];

  constructor(private CardService: BusinesscardsService, private router: Router) { }
  AddCard() {
    this.router.navigate(['/new-businesscard']);
  }
  generateCards() {
    this.CardService.generateCards().snapshotChanges()
    .pipe(map(changes =>
      changes.map(c =>
        ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    ).subscribe(card => {
      this.Cards = card;
    });
  }

  ngOnInit() {
    this.generateCards();
  }

}
