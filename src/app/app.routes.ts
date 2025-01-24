import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { UsersComponent } from './pages/users/users.component';
import { UserInterfaceComponent } from './UserInterface/full.component';
import { HomeComponent } from './UserInterface/home/home.component';
import { AppSideLoginComponent } from './pages/authentication/side-login/side-login.component';
import { HistoryComponent } from './UserInterface/history/history.component';
import { AppSideRegisterComponent } from './pages/authentication/side-register/side-register.component';
export const routes: Routes = [

  {
    path: 'client',
    component: UserInterfaceComponent,
    children: [
      {
        path: '',
        component:HomeComponent
      },
      {
        path: 'books',
        component:HomeComponent
      },
      {
        path: 'history',
        component:HistoryComponent
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
  
    ],
  },



  {
    path: 'A',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin/users',
        pathMatch: 'full',
      },
       
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },

      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: '',
    component: AppSideLoginComponent,
 
  },

  {
    path: 'register',
    component: AppSideRegisterComponent,
 
  },
  {
    path: 'login',
    component: AppSideLoginComponent,
 
  },
 

  {
    path: '**',
    redirectTo: 'authentication/error'
  }
];
