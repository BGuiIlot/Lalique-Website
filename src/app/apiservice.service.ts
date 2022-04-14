import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend

    apiUrl = 'http://localhost:3000/device'

  // get all data

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }

  // create data

  createData(data:any):Observable<any>
  {
    console.log(data,'createapi=>');

    return this._http.post(`${this.apiUrl}`,data);
  }

  // delete data

  deleteData(time:any,date:any):Observable<any>
  {
    let times = time;
    let dates = date;


    return this._http.delete(`${this.apiUrl}/${times}/${dates}`);
  }

  // update data
  updateData(data:any,date:any,time:any):Observable<any>
  {
    let times = time;
    let dates = date;
    return this._http.put(`${this.apiUrl}/${times}/${dates}`,data);
  }

  // get data by types
  typesData(type:any,):Observable<any>{

    let types = type;

    return this._http.get(`${this.apiUrl}/type-${types}`);
  }

  // get data by devices type 1(temperatures)
  deviceData1(device:any):Observable<any>{

    let devices = device;

    return this._http.get(`${this.apiUrl}/1${devices}`);
  }

  // get data by devices type 3(hygrometrie)
  deviceData3(device:any):Observable<any>{

    let devices = device;

    return this._http.get(`${this.apiUrl}/3${devices}`);
  }

  //get moyenne of type 1  
  moyenneData1():Observable<any>{
    return this._http.get(`${this.apiUrl}/1date`);
  }
  //get moyenne of type 3 
  moyenneData3():Observable<any>{
    return this._http.get(`${this.apiUrl}/3date`);
  }

  //get name of devices
  deviceName():Observable<any>{
    return this._http.get(`${this.apiUrl}/number`)
  }
}
