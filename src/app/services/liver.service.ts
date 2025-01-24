import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class LiversService {
  httpClient=inject(HttpClient)
  updateLiver(Liver: any): Observable<any> {
    const LiverUrl = ApiMapService.Livers+"-edit/"+Liver.id;
    console.log("updateLiver",LiverUrl);
    return this.httpClient.put<any>(LiverUrl, Liver);
  }
  getLiverData(): Observable<any[]> {
    const LiverUrl = ApiMapService.Livers;
    console.log("getting the data from ",LiverUrl," .......");
    return this.httpClient.get<any[]>(LiverUrl); // Return observable
  }
  deleteLiver(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const LiverUrl = ApiMapService.Livers + '-delete/'+id;
    return this.httpClient.delete<any>(LiverUrl); // Return observable
  }

  addLiver(Liver: any): Observable<any> {
    console.log("addLiver",Liver);
    const LiverUrl = ApiMapService.Livers+"-create";
    return this.httpClient.post<any>(LiverUrl, Liver); // Return observable
  }

}