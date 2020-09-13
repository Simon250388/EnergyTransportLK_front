import { Component } from '@angular/core';
import { NotificationListModel } from '../notification-list-model'

const ELEMENT_DATA: NotificationListModel[] = [
  {
    object: {
      id: 1,
      ObjectType: {
        id: 1,
        present: 'Заявка на тп'
      },
      number: '1234'
    },
    currentStatus: {
      id: 1,
      present: 'Заявка исполненна'
    },
    statusChangeAt: '2020-01-01T00:00:00'
  }

];

@Component({
  selector: 'lk-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  dataSource = ELEMENT_DATA;
  
  constructor() { }



}
