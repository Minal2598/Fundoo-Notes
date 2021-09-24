import { Component, OnInit, Output, EventEmitter } from '@angular/core';



import { NotesService } from '../../../services/notes/notes.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {

  show = false
  constructor(private notesService:NotesService) { 
      
  }

  ngOnInit(){
  }

  @Output() createNoteRefresh = new EventEmitter();
  onClick(){
    this.show = true
  }
  createNote(){
    let req={
      title:'this is a testing note',
      description:'this is a testing description'
    }
    this.notesService.createNotes(req).subscribe((res:any)=>{
      console.log(res.status.details);
      let msg = res.status.datails
     
      this.createNoteRefresh.emit(msg)
      
      this.createNoteRefresh.emit(res.status.details);
      let message= res
    } ,(err:any)=>{
      console.log(err);

    })
    this.show=false
  }
}