import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APIproductsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(): Observable<Iproduct[]> {
    return this._HttpClient.get<Iproduct[]>(`${environment.baseUrl}/Products`);
  }


  getProductById(id: number): Observable<Iproduct> {
    return this._HttpClient.get<Iproduct>(`${environment.baseUrl}/Products/${id}`);
  }


  getProductsByCatId(catId: number): Observable<Iproduct[]> {
    return this._HttpClient.get<Iproduct[]>(`${environment.baseUrl}/Products?catId=${catId}`);
  }


  addNewProduct(prd: Iproduct)  :Observable<Iproduct>{
    return this._HttpClient.post<Iproduct>(`${environment.baseUrl}/Products`, JSON.stringify(prd));
  }


}
