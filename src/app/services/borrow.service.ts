import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class BorrowService {
  httpClient=inject(HttpClient)

  getborrowData(): Observable<any[]> {
    const borrowUrl = ApiMapService.borrowing;
    console.log("getting the data from ",borrowUrl," .......");
    return this.httpClient.get<any[]>(borrowUrl); // Return observable
  }
  gethistoryData(id: number): Observable<any[]> {
    const borrowUrl = ApiMapService.histroy+ '/'+id;
    console.log("getting the data from ",borrowUrl," .......");
    return this.httpClient.get<any[]>(borrowUrl); // Return observable
  }
  deleteborrow(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const borrowUrl = ApiMapService.borrow + '/'+id;
    return this.httpClient.delete<any>(borrowUrl); // Return observable
  }

  addborrow(borrow: any): Observable<any> {
    console.log("addborrow",borrow);
    const borrowUrl = ApiMapService.borrow+"-create/";
    return this.httpClient.post<any>(borrowUrl, borrow); // Return observable
  }

}