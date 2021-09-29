import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  NotesList = []
  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
   this.getAllTrash();
  }
  getAllTrash(){

    this.notesService.getAllTrashNote().subscribe((response:any)=>{
      console.log(response);

      this.NotesList = response.data.data
      this.NotesList.reverse()
      console.log("notelist::", this.NotesList)
    }, (err: any) => {
      console.log(err);

    })
  }

}
