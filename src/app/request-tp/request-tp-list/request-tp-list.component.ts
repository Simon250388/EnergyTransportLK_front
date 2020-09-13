import { Component, OnInit } from '@angular/core';
import { RequestTpModel } from '../request-tp-model';
import { RequestTPStoreService } from '../request-tp-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lk-request-tp-list',
  templateUrl: './request-tp-list.component.html',
  styleUrls: ['./request-tp-list.component.css']
})
export class RequestTPListComponent  {

  displayedColumns: string[] = ['id', 'typeRequest', 'objectName', 'date', 'statusChangeAt', 'currentStatus', 'edit'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource: Observable<RequestTpModel[]>;

  constructor(private readonly store: RequestTPStoreService) {
    this.store.get();
    this.dataSource = this.store.items;
  } 
}
