import { Injectable } from '@angular/core';
import { ObjectTpModel } from './object-tp-model';
import { BehaviorSubject } from 'rxjs';
import { ObjectTpRepositoryService } from './object-tp-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectTpStoreService {

  private _items = new BehaviorSubject<ObjectTpModel[]>([]);
  readonly items = this._items.asObservable();

  private store: { items: ObjectTpModel[] } = { items: [] };

  constructor(private readonly repository: ObjectTpRepositoryService) {}

  get(): void {
    if (this.store.items.length == 0) {
      this.repository.get().subscribe(
        data => {
          data.forEach(x=> this.store.items.push(x));        
          this._items.next(Object.assign({}, this.store).items);
        }
      )
    }    
  }

  getById(id: number) {
    let entity: ObjectTpModel = this.store.items.find(x => x.id == id);

    if (!entity) {
      this.repository.getById(id).subscribe(entity => {
        this.store.items.push(entity);
        this._items.next(Object.assign({}, this.store).items);
      });
    }
  }

  save(entity: ObjectTpModel) {
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
