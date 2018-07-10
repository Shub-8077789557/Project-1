import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
@Injectable()
export class DeleteNewsletterService {
  deleteNewsletter_Url: string;
  constructor(private http: HttpClient) {
    this.deleteNewsletter_Url = "http://localhost:3000/newsletter/deleteuserNewsLetter"
  }

  NewsletterDelete(Newsletter) {
    const req = new HttpRequest('POST', this.deleteNewsletter_Url, Newsletter);
    console.log(Newsletter);
    return this.http.request(req);
  }
}
