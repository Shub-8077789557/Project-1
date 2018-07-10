import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { NewsletterViewService } from './../../services/newsletter-view.service';
import { NewsletterUpdateService } from './../../services/newsletter-update.service';

@Component({
  selector: 'app-edit-newsletter',
  templateUrl: './edit-newsletter.component.html',
  styleUrls: ['./edit-newsletter.component.css']
})
export class EditNewsletterComponent implements OnInit {
  _id: number;
  NewsletterSave;
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
  constructor(private router: Router, private flashMessage: FlashMessagesService,
    private authService: AuthService, private newsletterView: NewsletterViewService,
    private activatedRoute: ActivatedRoute, private updateNewsletter: NewsletterUpdateService) { }

  form1 = new FormGroup({
    HRmarkup: new FormControl('')
  });

  form2 = new FormGroup({
    Amarkup: new FormControl('')
  });

  form3 = new FormGroup({
    Mrmarkup: new FormControl('')
  });


  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.NewsletterData.NewsletterId = params.id;
        console.log(params.id);
        this.NewsletterView();
      });
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
          this.NewsletterData.HRmarkup = body.NewsLetter.HRmarkup
          this.NewsletterData.Amarkup = body.NewsLetter.Amarkup
          this.NewsletterData.Mrmarkup = body.NewsLetter.Mrmarkup
          this.NewsletterData.userId = body.NewsLetter.userid

          this.form1.controls['HRmarkup'].setValue(this.NewsletterData.HRmarkup);
          this.form2.controls['Amarkup'].setValue(this.NewsletterData.Amarkup);
          this.form3.controls['Mrmarkup'].setValue(this.NewsletterData.Mrmarkup);
        } else {
          this.flashMessage.show("There is some error", { cssClass: "alert-danger", timeout: 2000 })
        }
      });

  }

  onSubmit(documentname: string) {

    const HrValue = this.form1.controls['HRmarkup'].value;
    const AdminValue = this.form2.controls['Amarkup'].value;
    const MrValue = this.form3.controls['Mrmarkup'].value;

    this.NewsletterData.HRmarkup = JSON.stringify(HrValue).replace(/^"/, "").replace(/"$/, "");
    this.NewsletterData.Amarkup = JSON.stringify(AdminValue).replace(/^"/, "").replace(/"$/, "");
    this.NewsletterData.Mrmarkup = JSON.stringify(MrValue).replace(/^"/, "").replace(/"$/, "");

    const userid = this.authService.getUser().user.id;
    const username = this.authService.getUser().user.username;
    if (documentname == "") {
      this.flashMessage.show("Please enter the newsletter title", { cssClass: 'alert-danger', timeout: 2000 })
    } else {
      let response;
      let body;
      this.NewsletterSave = {
        _id: this.NewsletterData.NewsletterId,
        userid: userid.toString(),
        username: username.toString(),
        documentname: documentname,
        Hrmarkup: this.NewsletterData.HRmarkup,
        Amarkup: this.NewsletterData.Amarkup,
        Mrmarkup: this.NewsletterData.Mrmarkup
      }

      this.updateNewsletter.UpdateNewsletter(this.NewsletterSave).subscribe((data: any) => (response = data),
        error => () => { },
        () => {
          body = response.body;
          //console.log(response);
          if (typeof body.success === typeof true) {
            this.flashMessage.show("Newsletter Saved Successfully!!", { cssClass: "alert-success", timeout: 2000 })
            this.router.navigate(['dashboard']);
          } else {
            this.flashMessage.show("Please enter again!!", { cssClass: "alert-danger", timeout: 2000 })
          }
        })
    }

  }

  NavigateToDashboard() {
    this.router.navigate(['/dashboard'])
  }
}
