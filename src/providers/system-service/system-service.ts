import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the SystemServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class SystemServiceProvider {

  constructor(public http: HttpClient) {

  }
  login(username: string, password: string) {
    return this.http.post<any>('http://staging.tangent.tngnt.co/api-token-auth/', { username: username, password: password })
      .map(user => {
        // login successful if there's a jwt token in the response
        console.log(user.status);
        if(user.status===401){

        }

        return user;
      });
  }
}
