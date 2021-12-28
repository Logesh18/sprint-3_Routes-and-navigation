import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http : HttpClient) { }
  url:string="http://localhost:3000/users";
  handleError:any;
  getUsers(){
    return this.http.get(this.url).pipe(retry(3), catchError(this.handleError));
  }
}
