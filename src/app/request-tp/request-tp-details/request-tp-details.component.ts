import { Component, OnInit } from '@angular/core';
import { RequestTPStoreService } from '../request-tp-store.service';
import { RequestTpModel } from '../request-tp-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lk-request-tp-details',
  templateUrl: './request-tp-details.component.html',
  styleUrls: ['./request-tp-details.component.css']
})
export class RequestTpDetailsComponent implements OnInit {

  private _model: RequestTpModel;

  displayedColumns: string[] = [
    'id',
    'designTime',
    'commissioningDate',
    'connectedPower',
    'accountingPointCount',
    'voltageLevel',
    'reliabilityCategory'];

  get model(): RequestTpModel {
    return this._model;
  }

  constructor(
    private route: ActivatedRoute,
    private readonly store: RequestTPStoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.store.getById(id);
      this.store.items.pipe(
        map(
          items => {
            return items.find(item => item.id == id)
          }))
        .subscribe(entity => {
          this._model = entity;
        }
        );
    });
  }

}
