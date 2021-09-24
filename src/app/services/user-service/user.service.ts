import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any
  BaseUrl = environment.BaseUrl

  constructor(private httpService: HttpService, ) { }

  registerUser(requestdata:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl +'user/userSignUp',requestdata,false, httpAuthOptions)
  }
  
  loginUser(requestdata:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl +'user/login',requestdata,false, httpAuthOptions)
  }
  resetpasswordUser(requestdata:any, token:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl +'user/reset-password',requestdata,false, httpAuthOptions)
  }
  accountrecoveryUser(requestdata:any){
    let httpAuthOptions = {
      headers:new Headers({
        'Content-Type' : 'application/json',
        'Authorization' : this.token

      })
    };
    console.log(requestdata);
    return this.httpService.PostService(this.BaseUrl +'user/reset',requestdata,false, httpAuthOptions)
  }
}
