import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

    urlSystem: string = environment.urls.UrlBackEnd;
    private readonly _items: string = "/items";

    private get itemsFull() { return this.urlSystem + this._items; }

    getItems(query: string): Observable<any[]> {
      debugger
      return this.http.get<any>(`${this.itemsFull}?q=${query}`).pipe(
        map(res => { return res; })
      );
    }

  getJsonData = (service: string): Observable<any> => {
    return this.http.get<any>(service)
      .pipe(retry(2));
  }

}
