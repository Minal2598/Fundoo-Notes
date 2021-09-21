import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registerUser(requestdata:any){
    console.log(requestdata);
    return this.httpService.post('user/userSignUp',requestdata)
  }
  loginUser(requestdata:any){
    console.log(requestdata);
    return this.httpService.post('user/login',requestdata)
  }
  resetpasswordUser(requestdata:any){
    console.log(requestdata);
    return this.httpService.post('user/reset-password',requestdata)
  }
  accountrecoveryUser(requestdata:any){
    console.log(requestdata);
    return this.httpService.post('user/reset',requestdata)
  }
}
