import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { EditlabelComponent } from '../../Editlabel-dialog/editlabel/editlabel.component';
import { MatDialog } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notes/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 5}, () =>
     '' );

  private _mobileQueryListener: () => void;
  labelList: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public dialog: MatDialog,private notesService:NotesService, private snackBar : MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getLabels()
  }
  openEditlabels() {
    const dialogRef = this.dialog.open(EditlabelComponent, {
      width: '350px',
      height:'350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
     
    });
  }

 getLabels(){
   this.notesService.getLabelsService().subscribe(
     (response:any)=>{
       console.log(response);
       this.labelList = response['data'].details
       console.log('LabelList..',this.labelList)

       this.snackBar.open('labeled..','',{duration:2000,})
     },
     (error: any) =>{console.log(error)

      this.snackBar.open('Error Occured','try Again',{duration:2000,})
    
    });

 }

}
