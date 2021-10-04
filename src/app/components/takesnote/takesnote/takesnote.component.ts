import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../../services/notes/notes.service'

@Component({
  selector: 'app-takesnote',
  templateUrl: './takesnote.component.html',
  styleUrls: ['./takesnote.component.scss']
})
export class TakesnoteComponent implements OnInit {
  
  show = false;
  title: any;
  description: any;

  @Output() createNoteRefresh = new EventEmitter<any>();


  constructor(private noteService: NotesService, private SnackBar:MatSnackBar) { }
  

  ngOnInit(): void {
  }

  
  onOpen(){
    this.show = true;
  }

  onClose(){
   

    let data={
      
      title: this.title,
      description: this.description
    };

    this.noteService.createNotes(data).subscribe(

      (response: any) => {
        // this.title = null;
        // this.description = null;
        console.log(response)
        this.show = false;
        this.SnackBar.open("Note Added Sucessfully",'',{duration: 3000,});
      },
      (error: any) => {
        console.log(error)

        this.SnackBar.open("Note Wasnot added !",'Try Again',{duration: 3000,});
      });

      window.location.reload();
  }

  
}