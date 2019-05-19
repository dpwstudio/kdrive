import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ContactComponent } from './screens/contact/contact.component';
import { KdriveComponent } from './screens/kdrive/kdrive.component';
import { DevisComponent } from './screens/devis/devis.component';
import { AvisComponent } from './screens/avis/avis.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kdrive', component: KdriveComponent},
  {path: 'devis', component: DevisComponent},
  {path: 'avis', component: AvisComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
