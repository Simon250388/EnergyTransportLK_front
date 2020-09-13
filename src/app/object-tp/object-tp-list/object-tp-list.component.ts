import { Component, OnInit } from '@angular/core';
import { ObjectTpModel } from '../object-tp-model';
import { ObjectTpStoreService } from '../object-tp-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lk-object-tp-list',
  templateUrl: './object-tp-list.component.html',
  styleUrls: ['./object-tp-list.component.css']
})
export class ObjectTpListComponent {

  dataSource: Observable<ObjectTpModel[]>;

  constructor(private readonly store: ObjectTpStoreService) {
    this.store.get();
    this.dataSource = this.store.items;
  }

}
