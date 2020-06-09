import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NiceSelectModule } from "ng-nice-select";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { HomeComponent } from './screens/home/home.component';
import { ContactComponent } from './screens/contact/contact.component';
import { KdriveComponent } from './screens/kdrive/kdrive.component';
import { TermsComponent } from './screens/terms/terms.component';
import { ResaFormComponent } from './components/resa-form/resa-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    KdriveComponent,
    TermsComponent,
    ResaFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgDatepickerModule,
    NiceSelectModule,
    HttpClientModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
