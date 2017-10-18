
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  testApi() 
    {
      return this._http.get(`/api/test`)
      .map( response => response.json() )
      .toPromise();
    }
}
