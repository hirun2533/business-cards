
import { BusinesscardsService } from '../businesscards.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Businesscard } from '../businesscard.model';
import { WebcamImage } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-image';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  constructor(public builder: FormBuilder, public CardService: BusinesscardsService) { }
  incorrect: boolean;
  applycard: boolean;
  onWebcam: boolean;
  succesfulAdd: boolean;
  Card: Businesscard;
  @ViewChild('cardTemplate', 
  {static: true}) 
  public cardTemp: NgForm;

    addnewCard() {
    this.applycard = true;
    if (this.cardTemp.invalid) {

    } else if (this.cardTemp.valid) {
      this.CardService.addservice(this.Card)
        this.applycard = false;
        this.succesfulAdd = true;
    
    }

  }
  ngOnInit() {

    this.Card = new Businesscard();
    this.incorrect = false;
    this.applycard = false;
    this.onWebcam = false;
    this.succesfulAdd = false;
  }

  

}