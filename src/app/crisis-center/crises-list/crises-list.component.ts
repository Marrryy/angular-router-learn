import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.css']
})
export class CrisesListComponent implements OnInit {

crises$: Observable<Crisis[]>;
selectedId: number;

constructor(
  private service: CrisisService,
  private route: ActivatedRoute
) {}

ngOnInit() {
  this.crises$ = this.route.paramMap.pipe(
    switchMap(params => {
      // (+) before `params.get()` turns the string into a number
      this.selectedId = +params.get('id');
      return this.service.getCrises();
    })
  );
}
}
