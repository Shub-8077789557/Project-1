import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NewsletterListingService } from './../../services/newsletter-listing.service';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NewsletterDuplicateService } from './../../services/newsletter-duplicate.service';
import { DeleteNewsletterService } from './../../services/delete-newsletter.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userlist: any;
  DelList: any;
  list;
  _id: string;
  Id: string;
  NewsletterData = {
    NewsletterId: "",
  };
  constructor(private router: Router, private newslist: NewsletterListingService,
    private changeDetectorRefs: ChangeDetectorRef, private authService: AuthService,
    private deleteNewsletter: DeleteNewsletterService, private flashMessage: FlashMessagesService,
    private duplicateNewsletter: NewsletterDuplicateService) { }


  ngOnInit() {
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
        console.log(body);
        this.userlist = body.NewsLetter;
        this.Id = body.NewsLetter[0]._id;
        console.log(this.Id);
      })
  }

  DeleteNewsletter(xyz) {
    let response;
    let body;

    this.DelList = {
      _id: xyz
    }

    this.deleteNewsletter.NewsletterDelete(this.DelList).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        if (typeof body.success == typeof true) {
          this.Letterlisting();
          this.flashMessage.show("Newsletter Deleted!!", { cssClass: "alert-success", timeout: 2000 });
        } else {
          this.flashMessage.show("Newsletter can't be deleted!!", { cssClass: "alert-danger", timeout: 2000 });
        }
      })


  }

  DuplicateNewsletter(abc, newslettername) {
    let response;
    let body;

    const DupList = {
      _id: abc,
      documentname: newslettername
    }

    this.duplicateNewsletter.DuplicateNewsletter(DupList).subscribe((data: any) => (response = data),
      error => () => { },
      () => {
        body = response.body;
        console.log(body);
        if (typeof body.success == typeof true) {
          this.Letterlisting();
          this.flashMessage.show("Newsletter Copied!!", { cssClass: "alert-success", timeout: 2000 });
        } else {
          this.flashMessage.show("Newsletter can't be Copied!!", { cssClass: "alert-danger", timeout: 2000 });
        }
      })

  }


  NavigateToMakeNewsletter() {
    this.router.navigate(['/make-newsletter']);
  }


  NavigateToViewnewsletter() {
    this.router.navigate(['dashboard/newsletter-view']);
  }



}
