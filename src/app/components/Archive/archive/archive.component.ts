import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../../services/notes/notes.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  NotesList = []


  constructor(private notesService : NotesService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllArchive();
  }

  getAllArchive(){

    this.notesService.getAllArchiveNote().subscribe((response:any)=>{
      console.log(response);

      this.NotesList = response.data.data
      this.NotesList.reverse()
      console.log("notelist::", this.NotesList)
      this.snackBar.open('Archived','',{duration:2000,})
    }, (err: any) => {
      console.log(err);
      this.snackBar.open('Error Occured','try Again',{duration:2000,})

    })
  }


}
