import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

@Injectable()
export class RoleService {
  Request_Url: string;
  constructor(
    private _http: HttpClient,
    
  ) {
    this.Request_Url = 'http://localhost:3000/getrole/role';
  }

  getroles(){
    const req = new HttpRequest('GET', this.Request_Url);
    console.log(req);
    return this._http.request(req);
  }


}
