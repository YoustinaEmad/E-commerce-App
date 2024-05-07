import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../icategory';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APIcategoryService {

  constructor(private _HttpClient :HttpClient) { }
  getAllCategories(): Observable<Icategory[]> {
    return this._HttpClient.get<Icategory[]>(`${environment.baseUrl}/Categories`);
  }
}
