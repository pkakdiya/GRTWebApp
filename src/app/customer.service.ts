import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICustomerInquiry {
  id?: number;
  name: string;
  address: string;
  phone: number;
  occupation: string;
  cast: string;
  email: string;
  birthdate: any;
  budget: number;
  flattype: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  public post(customerInfo: ICustomerInquiry): Observable<HttpResponse<any>> {
    return this.http.post<any>('/api/values', customerInfo, {observe: 'response'});
  }

  public get(): Observable<HttpResponse<ICustomerInquiry>> {
    return this.http.get<any>('/api/values');
  }

  public getById(id: number): Observable<HttpResponse<ICustomerInquiry>> {
    return this.http.get<any>(`/api/values/${id}`);
  }

  public delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`api/values/${id}`, {observe: 'response'});
  }

  public put(id: number, customerInfo: ICustomerInquiry) {
    return this.http.put<any>(`/api/values/${id}`, customerInfo, {observe: 'response'});
  }

  public getCustomersWhoseBirthdayToday(): Observable<HttpResponse<ICustomerInquiry>> {
    return this.http.get<any>('/api/values');
  }
}
