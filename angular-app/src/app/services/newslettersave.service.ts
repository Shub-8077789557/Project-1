import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
@Injectable()
export class NewslettersaveService {
  Newsletter_save: string;
  constructor(private http: HttpClient) {
    this.Newsletter_save = 'http://localhost:3000/newsletter/savenewsletter';
  }

  SaveNewsletter(Newsletter) {
    const req = new HttpRequest('POST', this.Newsletter_save, Newsletter);
    console.log(Newsletter);
    return this.http.request(req);
  }

}
