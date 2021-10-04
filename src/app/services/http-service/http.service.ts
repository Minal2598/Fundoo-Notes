import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  BaseUrl = environment.BaseUrl
  token: any
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token')

  }
  PostService(url: string = '', payload: any, tokenRequired: boolean = false, httpAuthOption: any) {
    // console.log(this.BaseUrl);
    return this.http.post( url, payload, tokenRequired && httpAuthOption);

  }

  // Post(url:any,requestdata:any){
  //   this.token=localStorage.getItem('token')

  //   let httpAuthOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization' : this.token


  //     })
  //   };
  //   let FullUrl = this.BaseUrl + url
  //   return this.http.post(FullUrl,requestdata)
  // }

  getService(url: string = '', tokenRequired: boolean = false, httpAuthOption: any) {
    console.log(this.BaseUrl);
    return this.http.get( url, tokenRequired && httpAuthOption);
  }

  // putService( url: string='' , tokenRequired:boolean = false, httpAuthOption:any){
  //   return this.http.put(url,tokenRequired && httpAuthOption);
  // }
  deleteService(url: string = '', tokenRequired: boolean = false, httpAuthOption: any) {
    console.log(url);
    return this.http.delete( url, tokenRequired && httpAuthOption);

  }


}
