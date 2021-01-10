import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FacturesService } from 'app/services/factures.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotificationsService } from 'app/services/notifications.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['position', 'nomFacture', 'tvaFacture','dateCreation','action'];

  constructor(private facturesSerivce : FacturesService,private router : Router, private notificationsService : NotificationsService ) { 
    
this.getAllForAdmin()
  }
  
  ngOnInit() {
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllForAdmin() {
    this.facturesSerivce.getAll()
    .subscribe((response : any)=>{
     console.log("factures : ",response)
    //  response.map(res=>{
    //    if (res.description.length>100) {
    //     res.description = res.description.substring(0,120)
    //     res.description = res.description+"..." 
    //    }
    //  }) 
     this.dataSource = new MatTableDataSource(response);
    this.dataSource.paginator = this.paginator;
    })
  }

  editById(body){
     this.sendSubcription(body)
    this.facturesSerivce.fillFormModel(body)
    this.router.navigateByUrl('/departments/edit')
  }

  deleteById(id,index){
    this.facturesSerivce.delete(id)
    .subscribe(
      (res: any) => {
        console.log(res);
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.notificationsService.showNotification('info',' facture deleted')
      },
      err => {
        console.log(err);
      },
    );
  }

  sendSubcription(body): void {    
    this.facturesSerivce.sendSubcription(body)
  }
 

}
