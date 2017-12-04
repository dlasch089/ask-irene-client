// Agnular imprts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

// Services
import { SpotService } from './services/spot.service';

// Pages
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageSpotComponent } from './pages/page-spot/page-spot.component';
import { PageFormComponent } from './pages/page-form/page-form.component';


// Components


import { AppComponent } from './app.component';

// Routes
const routes: Routes = [
  {path: 'user', component: PageUserComponent},
  {path: 'spot', component: PageSpotComponent},
  {path: 'form', component: PageFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageUserComponent,
    PageSpotComponent,
    PageFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    SpotService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
