import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturesService } from 'app/services/factures.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-departments-edit',
  templateUrl: './departments-edit.component.html',
  styleUrls: ['./departments-edit.component.css']
})
export class DepartmentsEditComponent implements OnInit {

  constructor( private facturesService : FacturesService,private router : Router ,private notificationsService : NotificationsService) { 
    if (!this.facturesService.formModel.value.idFacture) {
      this.router.navigateByUrl('departments/edit')
    }else{
      console.log("formModel : ",this.facturesService.formModel.value)
    }
   }
  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log("this.formModel.value : ",this.facturesService.formModel.value)
    this.facturesService.editById(this.facturesService.formModel.value.idFacture,this.facturesService.formModel.value)
    .subscribe(response=>{
      console.log("Edited successfully : ",response);
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')
    },err=>{
       console.log("eror : ")
      //this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')
      this.notificationsService.showNotification('success','Successful Edition - Department Successfully Edited.')
    })
  }
  }
  
