import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes/notes.service';
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  NotesList = []

 

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.getAllNotes()
  }
  datarecived(value: any){
    console.log(value);
  }
  getAllNotes() {
    this.notesService.getAllNotesService().subscribe((res:any) => {
      let notes=[];
      console.log(res);
      this.NotesList = res.data.data
      notes = res.data.data;
      this.NotesList = notes.filter((data:any) => data.isArchived != true && data.isDeleted != true);
      this.NotesList.reverse()
      console.log("notelist::", this.NotesList)
    }, (err: any) => {
      console.log(err);

    })
  }
}

