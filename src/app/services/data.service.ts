import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
  return this.http.get<any>('https://temp-80aee-default-rtdb.firebaseio.com/data.json');
}
getdetails(id:number){
  return this.http.get("https://temp-80aee-default-rtdb.firebaseio.com/data.json/"+id)
}
}
