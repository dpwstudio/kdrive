import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ContactComponent } from './screens/contact/contact.component';
import { KdriveComponent } from './screens/kdrive/kdrive.component';
import { TermsComponent } from './screens/terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kdrive', component: KdriveComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
