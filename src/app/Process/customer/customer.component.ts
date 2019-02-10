import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(public GB:GlobalService) { }

  ngOnInit() {
    this.getALLdata();
  }



  getALLdata(){
   this.GB.GetALLCustomer().subscribe(

    data=>{
      console.log("data here ",data);
      
    },
    err=>{
      window.alert("error occured");
    }
    ,
    ()=>{
      console.log("dataf");

    }

   );


  }

}
