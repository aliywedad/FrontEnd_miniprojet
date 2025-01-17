import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class UsersServicesComponent {
  httpClient=inject(HttpClient)
  
  
  getUserData(): Observable<any[]> {
    const UserUrl = ApiMapService.Users;
    return this.httpClient.get<any[]>(UserUrl); // Return observable
  }
  deteleUser(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const UserUrl = ApiMapService.Users +'-delete/'+id;
    console.log("deleteing the id ..... ",UserUrl);
    return this.httpClient.delete<any>(UserUrl);  
  }
  addUser(client: any): Observable<any> {
    console.log("addClient",client);
    const UserUrl = ApiMapService.Users+"-create";
    return this.httpClient.post<any>(UserUrl, client); // Return observable
  }

}