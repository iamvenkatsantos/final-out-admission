import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router';
import{Userform}from '../userform';
import{ HttpClient, HttpHeaders }from '@angular/common/http';
import { Router} from '@angular/router';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff:Userform;
  timerID;
  allChats:Userform[]=[];
  showVar:boolean=true;
  acceptVar:boolean=false;
  declineVar:boolean=false;
 

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    //const Email :string=this.route.snapshot.queryParamMap.get('Email');
    //console.log("ID"+this.route.snapshot.queryParamMap.get('Email'));
      //	this.loadAllChats();
    /*this.timerID = setInterval(() => {
          console.log("Timer");
          this.loadAllChats();
        }, 2000);*/
        //this.showFunction();
      }

    /*  loadAllChats():void{
      //  alert("hello");
        this.http.
        get("http://localhost:3000/api/get_chats").
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allChats=[];
          for (var key in data) {
                  console.log(data[key].DOB);
                  this.allChats.push(data[key]);
          }
          console.log(this.allChats[0]);
          },
          error  => {
          console.log("Error", error);
        });
      }*/


      showFunction():void {
          this.showVar = true;	
          this.acceptVar = false;
          this.declineVar = false;

          //fetch all-0 values 
          this.http.
        get("http://localhost:3000/api/get_chats/show").
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allChats=[];
          for (var key in data) {
                  console.log(data[key].DOB);
                  this.allChats.push(data[key]);
          }
          console.log(this.allChats[0]);
          },
          error  => {
          console.log("Error", error);
        });
    }

    acceptFunction():void {
      this.showVar = false;	
      this.acceptVar = true;
      this.declineVar = false;
      this.http.
        get("http://localhost:3000/api/get_chats/accept").
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allChats=[];
          for (var key in data) {
                  console.log(data[key].DOB);
                  this.allChats.push(data[key]);
          }
          console.log(this.allChats[0]);
          },
          error  => {
          console.log("Error", error);
        });
        
}

declineFunction():void {
  this.showVar = false;	
  this.acceptVar = false;
  this.declineVar = true;
  this.http.
        get("http://localhost:3000/api/get_chats/decline").
        subscribe(
          data  => {
          console.log("chats loaded successfully ");
          console.log(data);
         this.allChats=[];
          for (var key in data) {
                  console.log(data[key].DOB);
                  this.allChats.push(data[key]);
          }
          console.log(this.allChats[0]);
          },
          error  => {
          console.log("Error", error);
        });
}

showID(id:String){

  //alert("after:"+id);

  {
    this.http.get("http://localhost:3000/api/update/"+id).subscribe(
     data=>{
       //alert("post req sucessfull"+ id);
       //alert(this.staff.Email);
     console.log("post req sucessfull",data);
     alert("Application Approved");

     },
    error =>{
 
     console.log("error",error);
     });
    }
    this.showFunction();
}
decline(id:String){

  //alert("after:"+id);

  {
    this.http.get("http://localhost:3000/api/update/decline/"+id).subscribe(
     data=>{
      // alert("post req sucessfull"+ id);
       //alert(this.staff.Email);
     console.log("post req sucessfull",data);
     alert("Application Declined");
     },
    error =>{
 
     console.log("error",error);
     });
    }
    this.showFunction();
}
dashboardFunction(){
  this.router.navigate(["/","seat"]);
}

}
