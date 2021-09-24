import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  BaseUrl = environment.BaseUrl
  token:any

  constructor(private httpService:HttpService) { 
  this.token = localStorage.getItem('token')
  }

createNotes(data:any): Observable<any>{
  let httpAuthOption = {
    headers:new HttpHeaders({
      'Content-Type' : 'applocation/json',
      'Authorization': this.token
    })
  };
  return this.httpService.PostService('notes/addNotes',data, true, httpAuthOption)
}
getAllNotesService(){
  let httpAuthOption = {
   
    headers:new HttpHeaders({
      'Content-Type' : 'applocation/json',
      Authorization: this.token
    })
  };
  return this.httpService.getService( 'notes/getNotesList', true,httpAuthOption)

}
}