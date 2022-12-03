import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './app-routing.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ActiveDeliveriesComponent } from './deliveries/active-deliveries/active-deliveries.component';
import { AnsweredDeliveriesComponent } from './deliveries/answered-deliveries/answered-deliveries.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/deliveries/active'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'stats',
    canActivate: [AppGuard],
    data: {
      loginRequired: true
    },
    component: StatsComponent
  },
  {
    path: 'deliveries',
    canActivate: [AppGuard],
    data: {
      loginRequired: true
    },
    children: [
      {
        path: 'active',
        component: ActiveDeliveriesComponent
      },
      {
        path: 'answered',
        component: AnsweredDeliveriesComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
