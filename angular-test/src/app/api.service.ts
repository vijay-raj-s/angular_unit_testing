import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  get_fixture_url = environment.apiUrl + '/fixtures';

  constructor(private http:HttpClient ) { }

  getFixtures() : Observable<HttpResponse<any>> {
    return this.http.get<any>(this.get_fixture_url);
  }
}
