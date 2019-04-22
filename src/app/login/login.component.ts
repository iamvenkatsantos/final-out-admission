import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery'
import { HttpClient } from '@angular/common/http';
import {Userlogin}from '../userlogin';
import {User}from '../user';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   student:String;
   staff:String;
   gender:boolean;
   r1flag:boolean= false;
   r2flag:boolean= false;
   
  user:Userlogin={
    Email:"",
    passWord:""
    }
    user1:User={
   
      Email:"",
      passWord:"",
      confrimpassWord:null
    }
    constructor(private http:HttpClient ,private router:Router){}

  ngOnInit() {
    $(".signup-form").hide();
    $(".signup").css("background", "grey");
    $(".login").css("background", "black");
    
    $(".login").click(function(){
      $(".signup-form").hide();
      $(".login-form").show();
      $(".signup").css("background", "grey");
      $(".login").css("background", "black");
    });
    
    $(".signup").click(function(){
      $(".signup-form").show();
      $(".login-form").hide();
      $(".login").css("background", "grey");
      $(".signup").css("background", "black");
    });
    
    $(".btn").click(function(){
      $(".input").val("");
    });
      }
      onGetvalueLogin(){
        this.http.post("http://localhost:3000/api",this.user).subscribe(
         data=>{
          // alert("post req sucessfull"+this.user);
          // alert(this.user.Email+'\n'+this.user.passWord);
         console.log("post req sucessfull",data);
         this.router.navigate(["/","front",], { queryParams:data});
         },
        error =>{
     
         console.log("error",error);
         });
        }
        onGetvalueLoginStaff(){
          this.http.post("http://localhost:3000/api/staff",this.user).subscribe(
           data=>{
            // alert("post req sucessfull"+this.user);
            // alert(this.user.Email+'\n'+this.user.passWord);
           console.log("post req sucessfull",data);
           this.router.navigate(["/","staff",], { queryParams:data});
           },
          error =>{
       
           console.log("error",error);
           });
          }
        onclear(){
         this.user.Email="";
         this.user.passWord="";
        }
        onGetvalueRegister(){
          //this.user.Email="";
          
         // alert(this.user1.Email);
          this.http.post("http://localhost:3000/apinew",this.user1).subscribe(
           data=>{
             //alert("Name:"+this.user.Email+" "+"password:"+this.user.passWord+" "+"Confrimpassword:"+this.user.confrimpassWord);
             console.log("post req sucessfull",data);
             
           },
          error =>{
       
           console.log("error",error);
           });
          }
          onRadioOne()
          {
            //alert("hello1");
            this.r1flag= true;
            this.r2flag=false;
          }

          onRadioTwo()
          {
            //alert("hello2");
            this.r1flag= false;
            this.r2flag=true;
          }
}
