import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../../../services/notes/notes.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isArchived = false;
 isDeleted = false;
  // getNotes: any;
  @Input() notecard:any;
  @Output() color: EventEmitter<any> = new EventEmitter();
  @Output() archive: EventEmitter<any> = new EventEmitter();
  @Output() unarchive: EventEmitter<any> = new EventEmitter();
  @Input() onArchiveChange = new EventEmitter();
 

  constructor(private notesService : NotesService,private snackBar:MatSnackBar) { }
  // @Input() notecard:any
  ngOnInit(): void {
  }

  colors:Array<any> = [

    { code: '#FFFFFF', name:'White'},
    { code: '#FF2400', name:'	Scarlet'},
    { code: '#800080', name:'Purple'},
    { code: '#FFC0CB', name:'Pink'},
    { code: '#ADD8E6', name:'LightBlue'},
    { code: '#FFA500', name:'Orange'},
    { code: '#008000', name:'Olive'},
    { code: '#00FFFF', name:'Cyan'},
    { code: '#52595D', name:'Iron Gray'},
    { code: '#CECECE', name:'Platinum Silver'},
    { code: '#9AFEFF', name:'Electric Blue'},
    { code: '#FFE5B4', name:'Peach'},
  ];

  setColor(color: any){
    this.notecard.color = color;
    console.log('color',color);
    let data = {
      color: color,
      noteIdList: [this.notecard.id],
    }
    console.log(data);
    this.notesService.changeColorService(data).subscribe(
      (response:any)=>{ 
        // this.getNotes.emit(color)
        console.log('Response of setColour',response);
        this.snackBar.open('Change the background color','',{duration:2000,})
      },
      (error:any) => {
        this.snackBar.open('Error occured color Note','try Again',{duration:2000,})
      }
      );
   }

  //  ArchiveNote

   archiveNote(){

    

    let data ={

      noteIdList: [this.notecard.id],
      isArchived: !this.isArchived
    }

    console.log(data);
    this.notesService.archiveNotes(data).subscribe(
      (response:any) => {
        
        console.log('archiveResponse',response);
        this.snackBar.open('Archived','',{duration:2000,})
      },
      (error:any) => {
        console.log('archive Error', error);
        this.snackBar.open('Error occured during arcive','try Again',{duration:2000,})
      });
   }

//Unarchive

   UnarchiveNote(){

    

    let data ={

      noteIdList: [this.notecard.id],
      isArchived: false,
    }

    console.log(data);
    this.notesService.archiveNotes(data).subscribe(
      (response:any) => {
        
        console.log('UnarchiveResponse',response);
        this.onArchiveChange.emit();
        this.snackBar.open('note Unarchived successfully...','',{duration:2000,})
      },
      (error:any) => {
        console.log('archive Error', error);
        this.snackBar.open('Error occured during Unarcive','try Again',{duration:2000,})
      });
   }

  //  TrashNote

   trashNote(){

    let data ={

      noteIdList: [this.notecard.id],
      isDeleted: !this.isDeleted
    }

    console.log(data);
    this.notesService.trashNote(data).subscribe(
      (response:any) => {
        
        console.log('deleteResponse',response);
        this.snackBar.open('Delete','',{duration:2000,})
      },
      (error:any) => {
        console.log('delete Error', error);
        this.snackBar.open('Error occured during trashNote','try Again',{duration:2000,})
      });
   }

    //RestoreTrash

    trashRestore(){

    

      let data ={

        noteIdList: [this.notecard.id],
        isDeleted: false,
      }
  
      console.log(data);
      this.notesService.trashNote(data).subscribe(
        (response:any) => {
          
          console.log('trash Response',response);
          this.snackBar.open('Restore Successfully...','',{duration:2000,})
        },
        (error:any) => {
          console.log('delete Error', error);
          this.snackBar.open('Error occured during Restoretrash','try Again',{duration:2000,})
        });
     }
  




   //Foreverdelete note
  deleteNote(){
    let req = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    this.notesService.deleteNoteService(req).subscribe((response)=>{
      console.log(response);
      
    })
    console.log();
    
  }
}
