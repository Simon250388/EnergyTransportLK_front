import { Component } from '@angular/core';
import { NotificationListModel } from 'src/app/notification/notification-list-model';

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
  },
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
  },
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
  selector: 'lk-notification-desktop',
  templateUrl: './notification-desktop.component.html',
  styleUrls: ['./notification-desktop.component.css']
})
export class NotificationDesktopComponent {
  dataSource = ELEMENT_DATA;

}
