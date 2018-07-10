import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { NewsletterListingService } from './../../services/newsletter-listing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  list;
  listno;
  constructor(private authService: AuthService, private router: Router,
    private newslist: NewsletterListingService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        console.log(err);
        return false;
      });

    this.Letterlisting();
  }

  Letterlisting() {
    let response;
    let body;

    const userid = this.authService.getUser().user.id;
    this.list = {
      userid: userid
    }

    this.newslist.NewsletterListing(this.list).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        this.listno = body.NewsLetter.length;
        console.log(this.listno);
      })
  }

}
