import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  getMyData(page: number)  
  {  
    //return this.http.get('https://jsonplaceholder.typicode.com/photos?_page='+page);  
    return this.http.get('http://localhost:59010/api/wells/getwellsbypage/' + page);
  }  
}
