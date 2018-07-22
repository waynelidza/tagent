import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Storage } from '@ionic/storage';
import {Http, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
/*
  Generated class for the SystemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class SystemServiceProvider {

  constructor(public http: HttpClient,public storage: Storage) {

  }
  login(username: string, password: string) {
    return this.http.post<any>('http://staging.tangent.tngnt.co/api-token-auth/', { username: username, password: password })
      .map(user => {
 
   

        return user;
      });
    }

    private handleError(error: any): Promise<any> {

      let responseStatus = error.status;
      if (responseStatus === 503) {
    
      }

      return Promise.reject(error);
  }


private getAuthHeaderAndOptions() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'api-key': 'channel-processor'
    })
  };
}

getUserDetails() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token2a3d1af2f3f6d1cddaa3012c1c465fcbdffa3678'
    })
  };
  return this.http.get<any>('http://staging.tangent.tngnt.co/api/user/me/',httpOptions)
    .map(user => {

 

      return user;
    });
  }


}
