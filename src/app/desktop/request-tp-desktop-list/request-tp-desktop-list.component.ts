import { Component } from '@angular/core';
import { RequestTpModel } from 'src/app/request-tp/request-tp-model';

const ELEMENT_DATA: RequestTpModel[] = [
  {
    id: 1,
    date: '2020-01-01T00:00:00',
    objectId: null,
    object: {
      id: 1, description: 'г. Брянск, ул. Орловская, д. 2', currentPower: '', maxPower: '', reliabilityCategory: '', location: '',
      cadastralNumArea: '',
      cadastralNumObj: '',
      chargeType: '',
      locatedInBuilding: false,
      meters: [],
      commissioningDates: []
    },
    currentStatus: { id: 0, present: 'Документы доплненны' },
    statusChangeAt: '2020-01-01T00:00:00',
    typeRequest: {
      id: 0,
      present: "Новое подключение"
    },
    provider: ''
  },
  {
    id: 1,
    date: '2020-01-01T00:00:00',
    objectId: null,
    object: {
      id: 1, description: 'г. Брянск, ул. Орловская, д. 2', currentPower: '', maxPower: '', reliabilityCategory: '', location: '',
      cadastralNumArea: '',
      cadastralNumObj: '',
      chargeType: '',
      locatedInBuilding: false,
      meters: [],
      commissioningDates: []
    },
    currentStatus: { id: 0, present: 'Документы доплненны' },
    statusChangeAt: '2020-01-01T00:00:00',
    typeRequest: {
      id: 0,
      present: "Новое подключение"
    },
    provider: ''
  },
  {
    id: 1,
    date: '2020-01-01T00:00:00',
    objectId: null,
    object: {
      id: 1, description: 'г. Брянск, ул. Орловская, д. 2', currentPower: '', maxPower: '', reliabilityCategory: '', location: '',
      cadastralNumArea: '',
      cadastralNumObj: '',
      chargeType: '',
      locatedInBuilding: false,
      meters: [],
      commissioningDates: []
    },
    currentStatus: { id: 0, present: 'Документы доплненны' },
    statusChangeAt: '2020-01-01T00:00:00',
    typeRequest: {
      id: 0,
      present: "Новое подключение"
    },
    provider: ''
  }
];

@Component({
  selector: 'lk-request-tp-desktop-list',
  templateUrl: './request-tp-desktop-list.component.html',
  styleUrls: ['./request-tp-desktop-list.component.css']
})
export class RequestTpDesktopListComponent {

  displayedColumns: string[] = ['id', 'typeRequest', 'objectName', 'date', 'statusChangeAt', 'currentStatus', 'edit'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = ELEMENT_DATA;

}
