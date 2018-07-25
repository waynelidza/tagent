import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
 userToken = '';
 counter = 0;
  counter2= 0;
  finalUrl =''
  gender = false;
  race = false;
 Url = 'http://staging.tangent.tngnt.co/api/employee/?';
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


 this.storage.get('Token').then((token) => {

  this.userToken = token;

  });

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token' +"    "   +"    "    +"  "  +this.userToken,

    })
  };
  return this.http.get<any>('http://staging.tangent.tngnt.co/api/user/me/',httpOptions)
    .map(user => {



      return user;
    });
  }

getUserProfile(token : String){


  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token' +"    "   +"    "    +"  "  +token,

    })
  };
  return this.http.get<any>('http://staging.tangent.tngnt.co/api/employee/me/',httpOptions)
    .map(user => {



      return user;
    });
}
  getEmployeeDeatils(token : String){


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token' +"    "   +"    "    +"  "  +token,

      })
    };
    return this.http.get<any>('http://staging.tangent.tngnt.co/api/employee/',httpOptions)
      .map(user => {



        return user;
      });
  }

  Filter(token : String,  Userdata:any, valuesCount: number ){
    this.counter= 0;
    this.counter2 =0;
    this.gender = false;
    this.race = false;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Token' +"    "   +"    "    +"  "  +token,

      })
    };
       console.log(Userdata);

       if(Userdata.gender){
         this.counter++
         this.gender = true;


       }
      if(Userdata.race){
       this.counter++;
        this.race = true;
      }

    if(Userdata.race ===''){
      this.counter2++;
    }

    if(Userdata.gender ===''){
      this.counter2++;
    }

      console.log(this.counter2);
       if(this.counter==2){


         this.finalUrl= `gender=${Userdata.gender}&race=${Userdata.race}`

       }

    if(this.counter==1){
      if(this.race===true) {
        this.finalUrl= `race=${Userdata.race}`


      }
      if(this.gender===true) {

        this.finalUrl= `gender=${Userdata.gender}`


      }


    }


    return this.http.get<any>(this.Url+this.finalUrl,httpOptions )

      .map(user => {



        return user;
      });

  }





}
