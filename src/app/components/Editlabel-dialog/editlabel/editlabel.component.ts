import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {
  label: any;
  show=true;
  labelList: any;
  pointer:any

  constructor(private notesService: NotesService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getLabels()
  }

  onOpen(){
    this.show = false;
  }

  onClose(){
    this.show = true;
  }

  onCreate(){
    this.show = true;
  
    let data = {
      label: this.label,
      isDeleted: false,
      userId: localStorage.getItem('userId')

    }

    this.notesService.createLabelsService(data).subscribe(

      (response:any) => {

        console.log(response);
        
        this.label = null;
        this.snackBar.open("Label Created",'',{duration:2000,});
      },
      (error:any) => {
        console.log(error);
        
        this.snackBar.open("Error occured at create label",'try Again',{duration:2000,});
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

  deleteLabel(labelList:any){
    console.log("Delete Labels-notes");
    let data={
      labelList:labelList,
      isDeleted:false,

    }
    console.log("delete Label",data);
    this.notesService.deleteLabelService(data).subscribe((res:any)=>{

     },(err:any)=>{
        console.log(err);
     })
  }
   updateLabels(labelList:any){

  this.show=true;
    let data={
      id: labelList.id,
      label:labelList.label,
     userId: localStorage.getItem('userId')

    }
    console.log("update Label",data);
    this.notesService.updateLabelService(data).subscribe((res:any)=>{
      console.log(res)

      this.snackBar.open('labeled updated..','',{duration:2000,})
     },(err:any)=>{
        console.log(err);
        this.snackBar.open('Error Occured','try Again',{duration:2000,})
     })
  }

}
