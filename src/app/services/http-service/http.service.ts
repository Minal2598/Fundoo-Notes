import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BaseUrl=environment.BaseUrl
  constructor(private http : HttpClient) { }

  post(url:any,requestdata:any){
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    };
    let FullUrl = this.BaseUrl + url
    return this.http.post(FullUrl,requestdata)
  }

}
