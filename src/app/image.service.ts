import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.production}`;

  constructor(private http: HttpClient) { }

  ImageContain(image64) {
    return this.http.post(this.url,
      {
      requests: [{
        image: {

          content: image64.replace(/^data:image\/(png|jpg|jpeg);base64,/, '')
        },
        features: [{
          type: 'TEXT_DETECTION'
        }]
      }]});
  }

}
