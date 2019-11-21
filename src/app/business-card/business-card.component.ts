import { Component, OnInit, Input } from '@angular/core';
import { Businesscard } from '..//businesscard.model';
import { BusinesscardsService } from '..//businesscards.service';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  @Input() Cards: Businesscard[];
  numCard: string;
  closeForm: boolean;

  constructor(private businessCardsService: BusinesscardsService) { }

  ngOnInit() {
    this.numCard = '';
    this.closeForm = true;
  }
  cardupdate(yourcard) {
    this.businessCardsService.updateservice(yourcard.id, yourcard)
  
  }

  carddelete(yourcard) {
    this.businessCardsService.deleteservice(yourcard.id);
  }
  
  updateStart(yourcard) {
    this.numCard = yourcard.id;
    console.log(yourcard.id);
  }

  updateEnd() {
    this.numCard = '';
  }

 

}
