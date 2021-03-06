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
  let httpAuthOption = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(data);
  console.log(httpAuthOption);
  
  return this.httpService.PostService(this.BaseUrl+'notes/changesColorNotes',data,true, httpAuthOption);
}
archiveNotes(data:any){
  let httpAuthOption = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(httpAuthOption);

  return this.httpService.PostService(this.BaseUrl+'notes/archiveNotes',data,true, httpAuthOption);
        
}

getAllArchiveNote(){
  let httpAuthOption = {
   
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token
    })
  };
  return this.httpService.getService(this.BaseUrl+'notes/getArchiveNotesList', true,httpAuthOption)
}
trashNote(data: any){
  let httpAuthOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(httpAuthOptions);

  return this.httpService.PostService(this.BaseUrl+'notes/trashNotes',data,true, httpAuthOptions);
        
}

getAllTrashNote(){
  let httpAuthOption = {
   
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token
    })
  };
  return this.httpService.getService(this.BaseUrl+'notes/getTrashNotesList', true,httpAuthOption)

}

// -----------------Labels post----------------------------//

createLabelsService(data:any) : Observable<any>{
  let httpAuthOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(httpAuthOptions); // to check the value of httpAuthOptions to get ride of an error 

  return this.httpService.PostService(this.BaseUrl +'/noteLabels',data, true, httpAuthOptions);

}
// -----------------Labels get----------------------------//

getLabelsService(){
  let httpAuthOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(httpAuthOptions);

  return this.httpService.getService(this.BaseUrl+'/noteLabels/getNoteLabelList',true, httpAuthOptions);
        
}

deleteLabelService(data:any){
  let httpAuthOption = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token

    })
  };
  console.log("notesService data",data.labelList.id);
  return this.httpService.deleteService(this.BaseUrl+'/noteLabels/'+data.labelList.id+'/deleteNoteLabel',data,httpAuthOption);

}
updateLabelService(data:any){
  let httpAuthOption = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.token

    })
  };
  console.log("notesService data",data.id);
  return this.httpService.PostService(this.BaseUrl+'/noteLabels/'+data.id+'/updateNoteLabel',data,true,httpAuthOption);


}

}