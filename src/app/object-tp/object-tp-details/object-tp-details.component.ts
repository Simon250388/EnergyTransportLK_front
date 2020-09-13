import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectTpStoreService } from '../object-tp-store.service';
import { ObjectTpModel } from '../object-tp-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lk-object-tp-details',
  templateUrl: './object-tp-details.component.html',
  styleUrls: ['./object-tp-details.component.css']
})
export class ObjectTpDetailsComponent implements OnInit {

  private _model: ObjectTpModel;

  get model(): ObjectTpModel {
    return this._model;
  }

  constructor(
    private route: ActivatedRoute,
    private readonly store: ObjectTpStoreService) { }

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
