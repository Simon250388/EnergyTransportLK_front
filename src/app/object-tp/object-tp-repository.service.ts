import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjectTpModel } from './object-tp-model';

const ELEMENT_DATA: ObjectTpModel[] = [
  {
    id: 1,
    description: 'г. Брянск, ул. Орловская, д. 1',
    currentPower: '',
    maxPower: '',
    reliabilityCategory: '',
    location: 'я значение расположения',
    cadastralNumArea: 'я кадастровый номер земельного участка',
    cadastralNumObj: 'я кадастровый номер объекта',
    chargeType: 'я виду нагрузки',
    locatedInBuilding: false,
    meters: [
      {
        id: 1,
        calculationPeriod: '2020-01-01T00:00:00',
        description: '0051212313',
        model: 'СГВ-15',
        verificationPeriod: '2022-01-01T00:00:00',
        information: ''
      }
    ],
    commissioningDates: []
  },
  {
    id: 2,
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
  {
    id: 3,
    description: 'г. Брянск, ул. Орловская, д. 3',
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
  }
];


@Injectable({
  providedIn: 'root'
})
export class ObjectTpRepositoryService {

  private readonly entityUrl: string = "requestTp";

  constructor(private http: HttpClient) {
  }

  get(): Observable<ObjectTpModel[]> {
    return from([ELEMENT_DATA]);
    //return this.http.get<ObjectTpModel[]>(`${environment.apiUrl}/${this.entityUrl}`);
  }

  getById(id: number): Observable<ObjectTpModel> {
    return this.http.get<ObjectTpModel>(`${environment.apiUrl}/${this.entityUrl}/${id}`);
  }

  post(entity: ObjectTpModel): Observable<ObjectTpModel> {
    return this.http.post<ObjectTpModel>(`${environment.apiUrl}/${this.entityUrl}`, entity);
  }

  put(entity: ObjectTpModel): Observable<ObjectTpModel> {
    return this.http.put<ObjectTpModel>(`${environment.apiUrl}/${this.entityUrl}/${entity.id}`, entity);
  }
}
