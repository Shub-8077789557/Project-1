import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Http, Headers, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guards';
import { PasswordStrengthBarModule } from 'ng2-password-strength-bar';
import { AuthService } from './services/auth.service';
import { DataTableModule } from "angular2-datatable";
import { MakenewsletterComponent } from './components/makenewsletter/makenewsletter.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NewslettersaveService } from './services/newslettersave.service';
import { NewsletterListingService } from './services/newsletter-listing.service';
import { NewsletterViewService } from './services/newsletter-view.service';
import { NewsletterUpdateService } from './services/newsletter-update.service';
import { FroalaComponent } from './components/froala.component';
import { EditNewsletterComponent } from './components/edit-newsletter/edit-newsletter.component';
import { DeleteNewsletterService } from './services/delete-newsletter.service';
import { NewsletterDuplicateService } from './services/newsletter-duplicate.service';
import { DeleteComponent } from './components/delete/delete.component';
import { TooltipModule } from "ngx-tooltip";
import {RoleService} from './services/roles.service';
import { NewsletterViewComponent } from './components/newsletter-view/newsletter-view.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'make-newsletter', component: MakenewsletterComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/:id', component: EditNewsletterComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/view/:Ide', component: NewsletterViewComponent, canActivate: [AuthGuard] }   
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    MakenewsletterComponent,
    FroalaComponent,
    EditNewsletterComponent,
    DeleteComponent,
    NewsletterViewComponent
  ],
  imports: [
    BrowserModule,
    PasswordStrengthBarModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    TooltipModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, FlashMessagesService, AuthService,
    AuthGuard, NewslettersaveService, NewsletterListingService,
    NewsletterViewService, NewsletterUpdateService, DeleteNewsletterService,
    NewsletterDuplicateService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
