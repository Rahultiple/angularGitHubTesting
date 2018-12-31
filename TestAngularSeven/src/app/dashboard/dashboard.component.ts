import { Component, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../data/data-fetch.service';
import { Observable } from 'rxjs';
import { Inteface1 } from './interface';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterContentInit {
    symbol:string;
    obj:Observable<Inteface1>;
    idk:Inteface1;
    inf:Inteface1;  
    data:any;
    title:String;
    userId:Number;
    id:Number;
    httpClient:HttpClient;
    selectBox:String;
    symbols:String[]=["avc","frrr","rertret"];
    myCountryData:Array<Select2OptionData>;
    myCountryDataLen:number;
     public options: Select2Options;
    constructor(private dataBoard:DataFetchService,httpClient:HttpClient) {
      /* this.id=10;
      this.userId=10;
      this.title="3343";
      this.httpClient=httpClient; */
      
      let data=dataBoard.fetchService();
       console.log("hi-> "+data);
      if(data !=null){
      
        this.id=  data.id;
        this.userId= data.userId;  
      }

      this.myCountryData=[
          {
                id: "india",
                text: "India",
                additional: "myCountry1"
          },
          {
                 id: "japan",
                text: "Japan",
                additional: "myCountry2"
          },
          {
                 id: "neth",
                text: "Netheland",
                additional: "myCountry2"
          },
          {
                id: "usa",
                text: "USA",
                additional: "myCountry3"
        }];

        console.log("my country data ->"+this.myCountryData.length);

    }

    ngOnInit() {
        let objervable = this.dataBoard.fetchServiceObservable();
        objervable.subscribe(
            (respose) => {
                this.id = respose.id;
                this.userId = respose.userId;
                this.title = respose.title;
            },
            (error) => {
                console.log(error);
            }
        );

        //my code strts
        //my code starts
       
        this.options = {
            multiple: false,
            theme: 'classic',
            closeOnSelect: false,
            matcher:function(term: string, text: string, option: any) {
                console.log ("term: " +term+" text: "+text+" length: "+length);
                console.log  ("option: " +option);
                 let countryObj=text;
                 if(countryObj.toLowerCase().search(term.toLowerCase()) !=-1){
                     option.selected=true;
                    return true;
                 }
                       
               return false;
               
            } 
        }   
               
    }
    callChange(event:any ){
        console.log(event);
     }

    
    ngAfterContentInit(): void {
         this.selectBox=this.symbols[0];
         console.log( "value -> "+this.selectBox)
        jQuery('#symbolId').on('change', (event) => {
            let jQueryObj=jQuery(event);
            let myobj:any=event.target;
            var symbolSelected= event.target.id;
           console.log("symbolSelected- > "+symbolSelected);  
           let myval=myobj.value;             
           console.log("myobj- > "+myval);
             console.log("myobj- > "+jQueryObj);
       //you can use the selected value
    });
       let myvalue= jQuery('#symbolId').attr("value");
         console.log( "value -> "+myvalue)
   
        
        }
     
    sendback(){
        location.href="";
    }

}


