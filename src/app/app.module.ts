import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FilmsComponent } from './components/client/films/films.component';
import { SearchBarComponent } from './components/client/films/components/search-bar/search-bar.component';
import { MoviePosterComponent } from './components/client/films/components/movie-poster/movie-poster.component';
import { ProfileComponent } from './components/client/films/components/profile/profile.component';
import { FilterBarComponent } from './components/client/films/components/filter-bar/filter-bar.component';
import { WeeklyFilmComponent } from './components/client/films/components/weekly-film/weekly-film.component';
import { PopularNowComponent } from './components/client/explore/popular-now/popular-now.component';
import { PopularPostComponent } from './components/client/explore/popular-post/popular-post.component';
import { MainComponent } from './components/client/explore/main/main.component';
import { NearEventsComponent } from './components/client/explore/near-events/near-events.component';
import { GoogleMapComponent } from './components/client/explore/google-map/google-map.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CineclubProfileComponent } from './components/client/cineclubs/cineclub-profile/cineclub-profile.component';
import { CineclubDetailsComponent } from './components/client/cineclubs/cineclub-details/cineclub-details.component';
import { MoviesAvailableComponent } from './components/client/cineclubs/movies-available/movies-available.component';
import { MyGroupComponent } from './components/client/groups/my-group/my-group.component';
import { NewGroupComponent } from './components/client/groups/new-group/new-group.component';



import { AppRoutingModule } from './router/app-routing.module';
import { DashboardRoutingModule } from './router/dashboard-routing.module';
import { AgmCoreModule } from '@agm/core';
import { SearchBarCineclubsComponent } from './components/client/cineclubs/search-bar-cineclubs/search-bar-cineclubs.component';
import { HomeComponent } from './components/client/cineclubs/home/home.component';
import { ListCineclubsComponent } from './components/client/cineclubs/list-cineclubs/list-cineclubs.component';
import { CardComponent } from './components/client/cineclubs/card/card.component';
import { LandingPageComponent } from './views/shared/landing-page/landing-page.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserElectionComponent } from './views/shared/user-election/user-election.component';
import { AuthPageComponent } from './views/shared/auth-page/auth-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileUserComponent } from './components/client/profile-user/profile-user.component';
import { LoginComponent } from './components/client/auth/login/login.component';
import { RegisterComponent } from './components/client/auth/register/cinephile/register.component';
import { RegisterOwnerComponent } from './components/client/auth/register/owner/register-owner.component';
import { ViewComponent } from './components/client/profile-user/view/view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookTicketComponent } from './components/client/films/components/book-ticket/book-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CineclubProfileComponent,
    CineclubDetailsComponent,
    MoviesAvailableComponent,
    FilmsComponent,
    SearchBarComponent,
    MoviePosterComponent,
    WeeklyFilmComponent,
    FilterBarComponent,
    ProfileComponent,
    PopularNowComponent,
    PopularPostComponent,
    MainComponent,
    NearEventsComponent,
    GoogleMapComponent,
    SearchBarCineclubsComponent,
    HomeComponent,
    ListCineclubsComponent,
    CardComponent,
    NewGroupComponent,
    DashboardComponent,
    UserElectionComponent,
    AuthPageComponent,
    ProfileUserComponent,
    LoginComponent,
    RegisterComponent,
    RegisterOwnerComponent,
    ViewComponent,
    LandingPageComponent,
    MyGroupComponent,
    BookTicketComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardRoutingModule,
    BrowserModule,
    NgxPaginationModule,
    MatPaginatorModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCo73cODrVrhwYpmhegeL8ptJUmO_I-M04',
      libraries : ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
