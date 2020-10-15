import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


const crisesCenterRoutes: Routes = [
  {
    path:'crises-center',
    component: CrisisCenterComponent,
    children: [
      {
        path:'', 
        component: CrisesListComponent,
        children: [
          {
            path:':id', 
            component: CrisisDetailComponent
          },{
            path:'', 
            component: CrisisCenterHomeComponent
          },
        ]
      }

    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisesCenterRoutes)],
  exports: [RouterModule]
})
export class CrisesRoutingModule { }
