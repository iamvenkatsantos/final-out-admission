import { Component, OnInit } from '@angular/core';
import { Userform } from '../userform';
import{ HttpClient, HttpHeaders}from '@angular/common/http';
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  total;
  day;
  month;
  year;
  DOB;


  user:Userform={
    Fname:'',
    Lname:'',
    DOB:null,
    male:'',
    age:'',
    Family_name:'',
    Family_occup:'',
    religion:'',
    Family_income:'',
    Nationality:'',
    Community:'',
    Mobile_Number:null,
    Res_addr:'',
    Premanent_addr:'',
    Email:'',
    branch_choice1 :'',
  branch_choice2:'', 
  branch_choice3:'',
  previous_medium:'',
   previous_school:'', 
   previous_passing :'',
   previous_regno:'',
  board_state :'',
  board_cbse :'',
  board_other:'',
  hsc_language :'',
  hsc_language_marks:null,
  hsc_language_maxmark:null,
  hsc_english_marks :null,
  hsc_english_maxmark :null,
  hsc_maths_marks:null, 
  hsc_maths_maxmark:null,
  hsc_chemistry_marks: null,
  hsc_chemistry_maxmark :null,
  hsc_physics_marks:null,
   hsc_physics_maxmark :null,
  hsc_total_marks:null, 
  hsc_total_maxmark:null,
   hsc_cutoff :null,
   hsc_percentage :null,
   hsc_culturals :'',
   hsc_xtra:'',
  hostel_yes :'',
  hostel_no :'',
  first_graduvation_yes:'', 
  first_graduvation_no:'',
  Caste:'',
  degree_BE :'',
  degree_BTECH:'',
   
  }
   constructor(private http:HttpClient){
     
   }
  
   onGetvalue()
   {

    //alert("in value");
    this.http.post("http://localhost:3000/apinfo",this.user).subscribe(
     data=>{
      //alert("post req sucessfull"+data);
       /*alert(this.user.Fname+'\n'+this.user.Lname+'\n'+this.user.DOB+'\n'+this.user.male+'\n'+this.user.Family_name+'\n'+this.user.Family_occup
       +'\n'+this.user.Family_income+'\n'+'\n'+this.user.Caste+'\n'+this.user.Nationality+'\n'+this.user.hsc_total_marks+'\n'+this.user.hsc_xtra
       +'\n'+this.user.previous_school+'\n'+this.user.religion+'\n'+this.user.age);*/
     console.log("post req sucessfull",data);
     alert("Your data submitted successfully");
     },
    error =>{
 
     console.log("error",error);
     });
    }
    doSum()
    {
       this.total=+this.user.hsc_language_marks + +this.user.hsc_english_marks + +this.user.hsc_maths_marks
       + +this.user.hsc_chemistry_marks + +this.user.hsc_physics_marks;
     this.user.hsc_total_marks=this.total;
    }
    doMaxsum()
    {
      this.total=+this.user.hsc_language_maxmark + +this.user.hsc_english_maxmark + +this.user.hsc_maths_maxmark
      + +this.user.hsc_chemistry_maxmark + +this.user.hsc_physics_maxmark;
      this.user.hsc_total_maxmark=this.total;
      // alert("sum"+this.total);
      /// this.user.hsc_total_maxmark=12;
     
    }
    doCutoff(){
      this.total=(+this.user.hsc_maths_marks * 0.5)+(+this.user.hsc_chemistry_marks*0.25) +(+this.user.hsc_physics_marks*0.25 ) 
   this.user.hsc_cutoff=this.total;
    }
    doPercentage(){
      this.user.hsc_total_marks=+this.user.hsc_language_marks + +this.user.hsc_english_marks + +this.user.hsc_maths_marks
       + +this.user.hsc_chemistry_marks + +this.user.hsc_physics_marks;
       this.user.hsc_total_maxmark=+this.user.hsc_language_maxmark + +this.user.hsc_english_maxmark + +this.user.hsc_maths_maxmark
      + +this.user.hsc_chemistry_maxmark + +this.user.hsc_physics_maxmark;
      this.total=+this.user.hsc_total_marks / +this.user.hsc_total_maxmark;
      this.user.hsc_percentage=this.total*100;
      

    }
    
}
