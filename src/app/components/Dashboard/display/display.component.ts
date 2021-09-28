import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { UpdatenoteComponent } from '../../UpdateNotes/updatenote/updatenote.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  
  constructor(public dialog: MatDialog) {}
  @Input() NotesArray: any;

  ngOnInit() {
    console.log(this.NotesArray);
  }
  openDialog(notecard:any) {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '250px',
      data: notecard
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
     
    });
  }

}
