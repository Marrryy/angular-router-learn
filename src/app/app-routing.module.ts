import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes:Routes = [
  {
    path: '' ,redirectTo:'/heroes-list', pathMatch : 'full'
  },{
    path:'**', component:PageNotFoundComponent
  },{
    path:'compose',
    component : ComposeMessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes
      // {enableTracing:true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
