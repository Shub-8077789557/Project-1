import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { NewslettersaveService } from './../../services/newslettersave.service';
@Component({
  selector: 'app-makenewsletter',
  templateUrl: './makenewsletter.component.html',
  styleUrls: ['./makenewsletter.component.css']
})
export class MakenewsletterComponent implements OnInit {
  documentname: string;
  dept;
  constructor(private router: Router, private flashMessage: FlashMessagesService,
    private authService: AuthService, private newsletterSave: NewslettersaveService) { }

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
  }

  NavigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  onSubmit(documentname: string) {
    if (documentname == '') {
      this.flashMessage.show("Please enter newsletter title", { cssClass: 'alert-danger', timeout: 2000 })
    } else {
      let response;
      let body;

      const userid = this.authService.getUser().user.id;
      const username = this.authService.getUser().user.username;
      console.log(username);
      const Hrmarkup = JSON.stringify(this.form1.controls['HRmarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const Amarkup = JSON.stringify(this.form2.controls['Amarkup'].value).replace(/^"/, "").replace(/"$/, "");
      const Mrmarkup = JSON.stringify(this.form3.controls['Mrmarkup'].value).replace(/^"/, "").replace(/"$/, "");
      this.dept = {
        userid: userid.toString(),
        createdby: username.toString(),
        documentname: documentname,
        departmentname: "HR",
        Hrmarkup: Hrmarkup,
        Amarkup: Amarkup,
        Mrmarkup: Mrmarkup
      };

      console.log(this.dept);

      this.newsletterSave.SaveNewsletter(this.dept).subscribe((data: any) => (response = data),
        error => () => { },
        () => {
          body = response.body;
          console.log(response);
          if (typeof body.success == typeof true) {
            this.flashMessage.show("Newsletter Saved!", { cssClass: 'alert-success', timeout: 2000 });
            this.router.navigate(['/dashboard']);
          } else {
            this.flashMessage.show("Please try again!", { cssClass: 'alert-danger', timeout: 2000 });
          }
        })
    }
  }



}
