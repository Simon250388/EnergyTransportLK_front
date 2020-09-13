import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RequestTpModel } from './request-tp-model';
import { RequestTPDataService } from './request-tp-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class RequestTPStoreService {
  private _items = new BehaviorSubject<RequestTpModel[]>([]);
  readonly items = this._items.asObservable();

  private store: { items: RequestTpModel[] } = { items: [] };

  constructor(private readonly repository: RequestTPDataService) { }

  get(): void {
    if (this.store.items.length == 0) {
      this.repository.get().subscribe(
        data => {
          data.forEach(x => this.store.items.push(x));
          this._items.next(Object.assign({}, this.store).items);
        }
      )
    }
  }

  getById(id: number) {
    let entity: RequestTpModel = this.store.items.find(x => x.id == id);

    if (!entity) {
      this.repository.getById(id).subscribe(entity => {
        this.store.items.push(entity);
        this._items.next(Object.assign({}, this.store).items);
      });
    }
  }

  save(entity: RequestTpModel) {
    if (entity.id) {
      this.repository.put(entity).subscribe(newEntity => {
        let index = this.store.items.findIndex(x => x.id == entity.id);
        this.store.items[index] = newEntity;
        this._items.next(Object.assign({}, this.store).items);
      })
    } else {
      this.repository.post(entity).subscribe(newEntity => {
        this.store.items.push(newEntity);
        this._items.next(Object.assign({}, this.store).items);
      })
    }
  }
}
