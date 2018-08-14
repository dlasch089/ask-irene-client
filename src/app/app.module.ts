// Agnular imprts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MatTab, MatTabsModule } from '@angular/material';
import { MatTabGroup } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Guards
import { RequireAuthGuard } from './guards/require-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireAdminGuard } from './guards/require-admin.guard';
import { RequireMeGuard } from './guards/require-me.guard';

// Services
import { SpotService } from './services/spot.service';
import { SelectorService } from './services/selector.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

// Pages
import { PageSpotsComponent } from './pages/page-spots/page-spots.component';
import { PageFormComponent } from './pages/page-form/page-form.component';
import { PageListAllComponent } from './pages/page-list-all/page-list-all.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageMeComponent } from './pages/page-me/page-me.component';
import { PageSpotDetailComponent } from './pages/page-spot-detail/page-spot-detail.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

// Components
import { FormSelectComponent } from './components/form-select/form-select.component';
import { MapAutoCompleteComponent } from './components/map-auto-complete/map-auto-complete.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterSelectComponent } from './components/filter-select/filter-select.component';
import { SpotListComponent } from './components/spot-list/spot-list.component';
import { SpotDetailComponent } from './components/spot-detail/spot-detail.component';
import { MapSpotsComponent } from './components/map-spots/map-spots.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';

// Routes
const routes: Routes = [
  {path: '', canActivate: [RequireMeGuard], component: PageHomeComponent},
  {path: 'spots', canActivate: [RequireMeGuard], component: PageSpotsComponent},
  {path: 'spots/:spotId', canActivate: [RequireMeGuard], component: PageSpotDetailComponent},
  {path: 'auth/login', canActivate: [RequireAnonGuard], component: PageLoginComponent },
  {path: 'auth/signup', canActivate: [RequireAnonGuard], component: PageSignupComponent },
  {path: 'auth/me', canActivate: [RequireAuthGuard], component: PageMeComponent },
  {path: 'form', canActivate: [RequireAdminGuard], component: PageFormComponent},
  {path: 'list-all', canActivate: [RequireAdminGuard], component: PageListAllComponent},
  {path: 'about', canActivate: [RequireMeGuard], component: PageAboutComponent},
  {path: 'contact', canActivate: [RequireMeGuard], component: PageContactComponent},
  {path: 'user/me', canActivate: [RequireAuthGuard], component: PageProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageFormComponent,
    PageListAllComponent,
    FormSelectComponent,
    MapAutoCompleteComponent,
    PageLoginComponent,
    PageSignupComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    PageSpotsComponent,
    PageMeComponent,
    PageHomeComponent,
    FilterComponent,
    FilterSelectComponent,
    SpotListComponent,
    SpotDetailComponent,
    MapSpotsComponent,
    PageSpotDetailComponent,
    PageProfileComponent,
    PageAboutComponent,
    PageContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatTabsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-SctKNkfxfSUUktaLrTIU0bMxXxsFcyI',
      libraries: ['places']
    }),
    ReactiveFormsModule
  ],
  providers: [
    SpotService,
    SelectorService,
    AuthService,
    RequireAuthGuard,
    RequireAnonGuard,
    RequireAdminGuard,
    RequireMeGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
