import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMapService {
  static ip = 'http://localhost:8000/';
  static Users = `${ApiMapService.ip}users`;  
  static Livers = `${ApiMapService.ip}book`;  
  static borrow = `${ApiMapService.ip}borrow`;  
  static borrowing = `${ApiMapService.ip}borrowing-list`;  
  static auth = `${ApiMapService.ip}auth`;  
  static histroy = `${ApiMapService.ip}history`;  
  
  
  constructor() { }
}
