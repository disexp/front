import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../layouts/dashboard/dashboard.component';
import { FilmsComponent } from '../components/client/films/films.component';
import { ProfileComponent } from '../components/client/films/components/profile/profile.component';
import { MainComponent } from '../components/client/explore/main/main.component';
import { HomeComponent } from '../components/client/cineclubs/home/home.component';
import { CineclubProfileComponent } from '../components/client/cineclubs/cineclub-profile/cineclub-profile.component';
import { NewGroupComponent } from '../components/client/groups/new-group/new-group.component';
import { MyGroupComponent } from '../components/client/groups/my-group/my-group.component';
import { ViewComponent } from '../components/client/profile-user/view/view.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: FilmsComponent},
      { path: 'peliculas', component: FilmsComponent },
      { path: 'peliculas/pelicula/:id', component: ProfileComponent },
      { path: 'explorar', component: MainComponent },
      { path: 'cineclubs', component: HomeComponent },
      { path: 'cineclubs/cineclub/:id', component: CineclubProfileComponent},
      { path: 'crear-grupo', component: NewGroupComponent },
      { path: 'mis-grupos', component: MyGroupComponent },
      { path: 'perfil', component: ViewComponent },
      // {path:'',pathMatch:'full',redirectTo:'explorar'},
      // {path:'**',pathMatch:'full',redirectTo:'explorar'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
