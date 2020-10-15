import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CrisesListComponent } from './crises-list/crises-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';

import { CrisesRoutingModule } from './crises-center-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisesRoutingModule
  ],
  declarations: [ 
    CrisisCenterComponent,
    CrisesListComponent, 
    CrisisCenterHomeComponent,
    CrisisDetailComponent],
})
export class CrisesCenterModule { }
