import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
export const PagesRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard/users' },
        { title: 'Starter' },
      ],
    },
  },
];
