import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
@Injectable()
export class NewsletterDuplicateService {
  Duplicate_Url: string;
  constructor(private http: HttpClient) {
    this.Duplicate_Url = "http://localhost:3000/newsletter/duplicatenewsletter";
  }

  DuplicateNewsletter(Newsletter) {
    const req = new HttpRequest('POST', this.Duplicate_Url, Newsletter);
    console.log(Newsletter);
    return this.http.request(req);
  }

}
