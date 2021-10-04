import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from '../../../services/notes/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit{

  public title:any
  public description:any

  constructor( private notesService : NotesService, private SnackBar:MatSnackBar,
  public dialogRef: MatDialogRef<UpdatenoteComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(data);
    this.title=data.title,
    this.description=data.description

  }

onNoClick(): void {
  this.dialogRef.close();
}


  ngOnInit() {

  }
  
  updateNote(){
    let req = {
      noteId: this.data.id,

      title: this.title,
      description: this.description

    }

      this.notesService.UpdateNoteService(req).subscribe((result)=>{
        console.log(result);
        this.dialogRef.close();
    })
    window.location.reload();


  }

}
