import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
import{Seat}from '../seat';

@Component({
  selector: 'app-seat-alloc',
  templateUrl: './seat-alloc.component.html',
  styleUrls: ['./seat-alloc.component.css']
})
export class SeatAllocComponent implements OnInit {

  viewStatusVar:boolean=false;
  setSeatVar:boolean=false;
  clearSeatVar:boolean=false;
  showListBoxVar:boolean=false;
  suma;
  department_arr=["IT", "MECH", "CSE", "EEE", "ECE", "CHEM"];
  seatValue_arr=[];
  //year;
  //depValue;
  hbvalue;
  dep;
  
  seat;
  attuvar= 0 ;
  naduraathiri_year;
  seatclass:Seat={
    year:null,
    depValue:''

  };
  constructor( private http:HttpClient ) { }

  ngOnInit() {
   
  }
  viewStatus()
  {
    //alert("in view status");
    this.viewStatusVar=true;
    this.setSeatVar=false;
    this.clearSeatVar=false;
    this.showListBoxVar=false; 
  }
  search():void{
    this.http.
    post("http://localhost:3000/api/get_fewstatus",{params: {year: this.seatclass.year, depValue: this.seatclass.depValue }}).
    subscribe(
      data  => {
      console.log("subs loaded successfully ");
      console.log(data);
        this.hbvalue=data;
        console.log("hello");
        this.seat=this.hbvalue[0].seatCount;
        this.dep=this.hbvalue[0].depname;
        console.log(this.hbvalue[0].seatCount);
     //this.allSubjects=[];
    /*  for (var key in data) {
              console.log(data[key]);
              this.allSubjects.push(data[key]);
      }
      console.log(this.allSubjects[0]);*/
      },
      error  => {
      console.log("Error", error);
    });
  }

  setSeat(){
    //alert("in set seat");
    this.showListBoxVar=true; 
    this.viewStatusVar=false;
    this.setSeatVar=false;
    this.clearSeatVar=false;

  }
  

  aandavarFunction(){
    
    if(this.naduraathiri_year){
    //alert(this.naduraathiri_year);
    this.http.
    post("http://localhost:3000/api/get_status",{params: { year : this.naduraathiri_year }}).
    subscribe(
      data  => {
      console.log("subs loaded successfully ");
      //alert(this.attuvar);
    
     if( data> 0 )
     {
      console.log(data);
        this.hbvalue=data;
        console.log("hello"+ data);
        //this.seat=this.hbvalue[0].seatCount;s
        //this.dep=this.hbvalue[0].depname;
        console.log(this.hbvalue[0].seatCount);
        this.attuvar=this.hbvalue[0].seatCount;
        //alert(this.attuvar);
        this.iffun();
     }
     else
     {
       //alert(data.valueOf.length );
       //alert(this.attuvar);
      this.iffun();
     }
        //alert(  this.attuvar);
      },
      error  => {
      console.log("Error", error);
      
    });
    }//end of if
    
    }
iffun(){

  if(this.attuvar)
  {
    console.log("if");
    this.viewStatusVar=false;
    this.setSeatVar=false;
    this.clearSeatVar=false;
    this.attuvar=0;
    this.showListBoxVar=true; 
  }
  else 
  {
    console.log("else");
    
    this.viewStatusVar=false;
    this.setSeatVar=true;
    this.clearSeatVar=false;
    this.showListBoxVar=true; 
  }

}

  clearSeat(){
    //alert("in clear seat");
    this.viewStatusVar=false;
    this.setSeatVar=false;
    this.clearSeatVar=true;
    this.showListBoxVar=false; 
  }
  

allocateSeat():void{
 // alert("in allocate seat");

console.log("depvalue:" +this.department_arr + "seat allocate:" + this.seatValue_arr);
    this.http.
    post("http://localhost:3000/api/allocate_seat",
      { params: {department_arr: this.department_arr, seatValue_arr: this.seatValue_arr }}).
   subscribe(
          data  => {
            console.log("seat allocated details done successfully");
            alert("Seats are Successfully Allocated");
          },
          error  => {
          console.log("Error", error);
        });
      }
      deletefac(){
        
      //console.log(this.naduraathiri_year);
      
        this.http.post("http://localhost:3000/api/del_content",{params: {year: this.naduraathiri_year}}).
         subscribe(
                data  => {
                  console.log("deleted successfully ");
                  //alert("Seats are Successfully Deleted");
                },
                error  => {
                console.log("Error", error);
              });
      
      
      
      
      }



    }
   
