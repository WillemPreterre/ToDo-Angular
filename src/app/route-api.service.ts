import { Injectable } from '@angular/core';
// import { ToDo } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteAPiService {

  constructor(private http: HttpClient) { }

  getToDoLists(): Observable<any[]>{
    return this.http.get<any[]>("../assets/toDo.json")
  }
  // getToDoLists(): Observable<ToDo[]> {
  //   return this.http.get<ToDo[]>("../assets/toDo.json")
  // }
}
