import { Component,OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  id: any;
  details: any;
  empId:any;
  e:any;
  
  constructor(private fs : DataService,private router : Router, private ar:ActivatedRoute){
    this.empId = sessionStorage.getItem("empId");
    this.readdata(this.empId);
    // this.ar.params.subscribe(
    //   {
    //     next : (params) => {
    //       this.id = params['id']
    //       this.readdata()
    //     },
    //     error : () => this.id = 0
    //   }
    // )
  }
  
  readdata(empId:any){
    this.fs.getData().subscribe(
      {
        next: (data:any) =>{
          for(let x of data){
            if(x['Employee ID'] == empId){
              this.e = x;
            }
          }
        },
        error : ()=>this.details = {}
      }
    )
  }
}
