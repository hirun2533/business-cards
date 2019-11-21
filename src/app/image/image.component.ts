import { BusinesscardsService } from '../businesscards.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, OnInit,ViewChild, Output, EventEmitter, HostListener} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-image';
import { WebcamInitError } from 'ngx-webcam/src/app/modules/webcam/domain/webcam-init-error';
import domtoimage from 'dom-to-image';
import { ImageService } from '../image.service';
import { Businesscard } from '../businesscard.model';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image64:string;
  @Output() DetectText = new EventEmitter();
  ImageCheck: boolean;
  public Image: WebcamImage = null;    
  private trigger: Subject<void> = new Subject<void>();  
  public errors: WebcamInitError[] = [];
  Card: Businesscard;
  
  @ViewChild('cardTemplate', 
  {static: true}) 
  public cardTemp: NgForm;

  constructor(public builder: FormBuilder, public CardService: BusinesscardsService, public ImageService: ImageService) { }

 
  ImageConvert() {
    const imgNode = document.getElementById('Image');
    domtoimage.toPng(imgNode)
    .then( (dataUrl: string) => {
      console.log('converting base64...');
      this.image64 = dataUrl;
      this.ImageService.ImageContain(dataUrl)
      
    }).catch( (e: any) => {
      console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
      console.log(e);
    });
  }

  @HostListener('getImage', ['$event.target.image64'])
  getImage(image64: any) {
    this.Card.image = image64;
  }

  public Imagetrigger(): void {
    this.trigger.next();
    this.ImageCheck = !this.ImageCheck;
  }

  public get ImageObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public ImageContain(Image: WebcamImage): void {

    this.Image = Image;
  }

  public ImageError(error: WebcamInitError): void {
    if (error.mediaStreamError 
      && error.mediaStreamError.name === 'NotAllowed') {
    }
    this.errors.push(error);
  }
  ngOnInit() {

    this.Card = new Businesscard();
    this.ImageCheck = false;
  }
  

}


