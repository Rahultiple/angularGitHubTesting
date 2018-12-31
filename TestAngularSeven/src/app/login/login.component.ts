import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data/data-fetch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataFetch:DataFetchService) { 
      
  }

  ngOnInit() {
  }
  fetchData(){
   /* let data;
    let dataObj= this.dataFetch.fetchServiceObservable();
   dataObj.subscribe((response)=>data=response)
   console.log("hi-> "+data);
   console.log("id-> "+data.id);
  // this.id=  data.id; */
   //this.userId= data.userId;
   location.href="dashboard";

  }

}
