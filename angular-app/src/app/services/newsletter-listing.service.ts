import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
@Injectable()
export class NewsletterListingService {
  Newsletter_list: string;
  constructor(private http: HttpClient) {
    this.Newsletter_list = "http://localhost:3000/newsletter/usernewsletter";
  }

  NewsletterListing(Newslist) {
    const req = new HttpRequest('POST', this.Newsletter_list, Newslist);
    console.log(Newslist);
    return this.http.request(req);
  }

}
