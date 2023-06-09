import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  gdata: any;
  constructor (private cs : DataService, private route: Router,private dialog: MatDialog){}
  
  fetchData() {
    this.cs.getData().subscribe(
      (response: any) => {
        this.gdata = response;
      },
      (      error: any) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    this.fetchData();
  }

  // sav(){
   
  // }

  openpop(empId:any) {
    
    sessionStorage.setItem("empId",empId);

    this.dialog.open(EmployeeDetailsComponent,{width:'30%',height:'80%'});
    

  }

}
