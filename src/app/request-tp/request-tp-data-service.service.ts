import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { RequestTpModel } from './request-tp-model';
import { environment } from 'src/environments/environment';

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
      id: 1,
      description: 'г. Брянск, ул. Орловская, д. 2',
      currentPower: '',
      maxPower: '',
      reliabilityCategory: '',
      location: '',
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


@Injectable({
  providedIn: 'root'
})
export class RequestTPDataService {

  private readonly entityUrl: string = "requestTp";

  constructor(private http: HttpClient) {
  }

  get(): Observable<RequestTpModel[]> {
    return from([ELEMENT_DATA]);
    // return this.http.get<RequestTpModel[]>(`${environment.apiUrl}/${this.entityUrl}`);
  }

  getById(id: number): Observable<RequestTpModel> {
    return this.http.get<RequestTpModel>(`${environment.apiUrl}/${this.entityUrl}/${id}`);
  }

  post(entity: RequestTpModel): Observable<RequestTpModel> {
    return this.http.post<RequestTpModel>(`${environment.apiUrl}/${this.entityUrl}`, entity);
  }

  put(entity: RequestTpModel): Observable<RequestTpModel> {
    return this.http.put<RequestTpModel>(`${environment.apiUrl}/${this.entityUrl}/${entity.id}`, entity);
  }
}
