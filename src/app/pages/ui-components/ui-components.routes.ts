import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { UsersComponent } from '../users/users.component';
import { LivresComponent } from '../livres/livres.component';
import { BorrowComponent } from '../borrow/borrow.component';
export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [


      {
        path: 'users',
        component: UsersComponent,
      },
      
      {
        path: 'borrow',
        component: BorrowComponent,
      },
      {
        path: 'livres',
        component: LivresComponent,
      } ,
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
    ],
  },
];
