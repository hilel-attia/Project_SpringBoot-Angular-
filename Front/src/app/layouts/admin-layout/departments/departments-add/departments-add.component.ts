import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturesService } from 'app/services/factures.service';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-departments-add',
  templateUrl: './departments-add.component.html',
  styleUrls: ['./departments-add.component.css']
})
export class DepartmentsAddComponent implements OnInit {

 
  constructor(private facturesService : FacturesService,private router : Router, private notificationsService: NotificationsService) {
    this.facturesService.createFormModel()
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("this.formModel.value : ",this.facturesService.formModel.value)
    this.facturesService.post(this.facturesService.formModel.value)
    .subscribe(response=>{
      console.log("Added successfully : ",response)
      this.notificationsService.showNotification('success','Successful Addition - factures  Successfully Added.')
      this.facturesService.createFormModel()
    },err=>{
      this.notificationsService.showNotification('danger','Something Wrong - Please Enter Valid Information.')

    })
  }

}