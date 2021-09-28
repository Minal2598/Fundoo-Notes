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
  console.log(data)
  let httpAuthOption = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token
    })
  };
  return this.httpService.PostService(this.BaseUrl+'notes/addNotes',data, true, httpAuthOption)
}
getAllNotesService(){
  let httpAuthOption = {
   
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token
    })
  };
  return this.httpService.getService(this.BaseUrl+'notes/getNotesList', true,httpAuthOption)
}
UpdateNoteService(data:any){
  let httpAuthOption = {
   
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token
    })
  };
  return this.httpService.PostService(this.BaseUrl+'notes/updateNotes',data, true,httpAuthOption)

}
deleteNoteService(data:any){
  let httpAuthOption = {
   
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token
    })
  };
  return this.httpService.PostService(this.BaseUrl+'notes/deleteForeverNotes',data, true, httpAuthOption)

}
changeColorService(data:any){
  let httpAuthOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(data);
  console.log(httpAuthOptions);
  
  return this.httpService.PostService(this.BaseUrl+'notes/changesColorNotes',data,true, httpAuthOptions);
}
}