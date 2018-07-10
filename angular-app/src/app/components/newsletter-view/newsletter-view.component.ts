import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages'
import {NewsletterViewService} from './../../services/newsletter-view.service';
@Component({
  selector: 'app-newsletter-view',
  templateUrl: './newsletter-view.component.html',
  styleUrls: ['./newsletter-view.component.css']
})
export class NewsletterViewComponent implements OnInit {
  NewsletterData = {
    NewsletterId: "",
    documentname: "",
    departmentname: "",
    createdby: "",
    userId: "",
    createDate: "",
    HRmarkup: "",
    Amarkup: "",
    Mrmarkup: ""
  };
  constructor(private newsletterView : NewsletterViewService, private activatedRoute : ActivatedRoute,
  private flashMessage : FlashMessagesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.NewsletterData.NewsletterId = params.Ide;
        console.log(params.Ide);
        this.NewsletterView();
  })
    
}

NewsletterView() {
  let response;
  let body;
  const NewsletterView = {
    //Userid: atob(userid).toString()
    _id: this.NewsletterData.NewsletterId
  }

  this.newsletterView.NewsletterView(NewsletterView).subscribe((data: any) => (response = data),
    error => () => { },
    () => {
      body = response.body;
      console.log(body);
      if (response.status == 200) {
        this.NewsletterData.NewsletterId = body.NewsLetter._id
        this.NewsletterData.documentname = body.NewsLetter.Documentname
        this.NewsletterData.departmentname = body.NewsLetter.departmentname
        this.NewsletterData.createDate = body.NewsLetter.createdate
        this.NewsletterData.createdby = body.NewsLetter.createdby
        this.NewsletterData.HRmarkup = body.NewsLetter.HRmarkup.replace(/<[^>]+>/gm, '').replace(/&amp/g,'&').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&#39;/g, "'").replace(/&;/g, '&').replace(/&nbsp;/g, "");
        this.NewsletterData.Amarkup = body.NewsLetter.Amarkup.replace(/<[^>]+>/gm, '').replace(/&amp/g,'&').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&#39;/g, "'").replace(/&;/g, '&');
        this.NewsletterData.Mrmarkup = body.NewsLetter.Mrmarkup.replace(/<[^>]+>/gm, '').replace(/&amp/g,'&').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&#39;/g, "'").replace(/&;/g, '&');
        this.NewsletterData.userId = body.NewsLetter.userid
      } else {
        this.flashMessage.show("There is some error", { cssClass: "alert-danger", timeout: 2000 })
      }
    });

}

openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

}