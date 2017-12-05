// Agnular imprts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

// Services
import { SpotService } from './services/spot.service';
import { SelectorService } from './services/selector.service';


// Pages
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageSpotComponent } from './pages/page-spot/page-spot.component';
import { PageFormComponent } from './pages/page-form/page-form.component';

// Components
import { FormSelectComponent } from './components/form-select/form-select.component';


import { AppComponent } from './app.component';
import { MapAutoCompleteComponent } from './components/map-auto-complete/map-auto-complete.component';

// Routes
const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
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
    FormSelectComponent,
    MapAutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCw7VtAVg6y_TSdQcFVB_dbcnnS15Vp4u0',
      libraries: ['places']
    }),
    ReactiveFormsModule
  ],
  providers: [
    SpotService,
    SelectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

