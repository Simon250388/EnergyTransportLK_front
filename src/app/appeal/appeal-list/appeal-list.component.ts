import { Component, OnInit } from '@angular/core';
import {AppealListModel} from'../appeal-list-model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: AppealListModel[] = [
  {
    id: 1,
    date: '2020-01-01T00:00:00',
    currentStatus: { id: 0, present: 'Документы доплненны' },
    statusChangeAt: '2020-01-01T00:00:00',
    typeRequest: {
      id: 0,
      present: "Новое подключение"
    }
  },
  {
    id: 1,
    date: '2020-01-01T00:00:00',
    currentStatus: { id: 0, present: 'Документы доплненны' },
    statusChangeAt: '2020-01-01T00:00:00',
    typeRequest: {
      id: 0,
      present: "Новое подключение"
    }
  },
  {
    id: 1,
    date: '2020-01-01T00:00:00',
    currentStatus: { id: 0, present: 'Документы доплненны' },
    statusChangeAt: '2020-01-01T00:00:00',
    typeRequest: {
      id: 0,
      present: "Новое подключение"
    }
  }
];


@Component({
  selector: 'lk-appeal-list',
  templateUrl: './appeal-list.component.html',
  styleUrls: ['./appeal-list.component.css']
})
export class AppealListComponent {

  displayedColumns: string[] = ['id', 'typeRequest', 'date', 'statusChangeAt', 'currentStatus', 'edit'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = ELEMENT_DATA;

}
