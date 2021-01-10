import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },    
   // { path:'events',loadChildren:()=> import('../../layouts/admin-layout/events/events.module').then(m=>m.EventsModule)},
    { path:'departments',loadChildren:()=> import('../../layouts/admin-layout/departments/departments.module').then(m=>m.DepartmentsModule)},
    //{ path:'agents',loadChildren:()=> import('../../layouts/admin-layout/agents/agents.module').then(m=>m.AgentsModule)},
   // { path:'centers',loadChildren:()=> import('../../layouts/admin-layout/centers/centers.module').then(m=>m.CentersModule)},
];
