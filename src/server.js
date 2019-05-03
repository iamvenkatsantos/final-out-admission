    
const express =require('express');
const app =express();
const mongoose=require('mongoose');
const body=require('body-parser');
const cros=require('cors');


var seatObj = require('./models/SeatSchema.js');
//var Facultyobj = require('./models/FacultySchema.js');
//var Sectionobj = require('./models/SectionSchema.js');

app.use(body.json());

var crosobj = {
    orign:"http://localhost:4200",
    optionSucessStatus:200
}
app.use(cros(crosobj));


app.listen(3000,() =>{
console.log("server listening the port 3000");

    });

app.post("/api/allocate_seat", (req, res)=>{
   
    var department_arr= req.body.params.department_arr;
    var seatValue_arr= req.body.params.seatValue_arr;
    console.log("dep name:" + department_arr);
    console.log("dep name:" + seatValue_arr);

    var today = new Date();
    var year_value = today.getFullYear();
    console.log("year"+ year_value);

     var db = mongoose.connect('mongodb://localhost:27017/admission' ,{ useNewUrlParser: true });

    for (i = 0; i<department_arr.length; i++)
        {
            //console.log("==========");
            var seatObjVar = new seatObj();

            seatObjVar.depname=department_arr[i];
            seatObjVar.seatCount=seatValue_arr[i];
            seatObjVar.year= year_value;
            
            seatObjVar.save((err)=>{
                console.log( "ADDED-"+ seatObjVar.depname );
                }); 
        }

       
    
  });
  app.post("/api/get_fewstatus", (req, res)=>{
    seatObj.find({'year':  req.body.params.year,'depname': req.body.params.depValue},
    {seatCount:1, depname : 1},
  function (err, docs) {
            if(err)
              {
                  res.status(500).json(err);
              }
          else if(docs)
              {
                  console.log(docs);
                  res.status(200).json(docs);
              }
  });
    });

  app.post("/api/get_status", (req, res)=>{
    //checking the value from angular 27-30
    //console.log("in get-subject api"+req.body.params.depValue);
  	//console.log("semvalue:"+req.body.params.name);
  	console.log("comes"+req.body.params.depValue + req.body.params.year);
    //assinging sem and dep value to variables
	  //var dbname= req.body.params.depValue;
	  //var semValue= req.body.params.name; //sem value 
    //connecting to db
    var db = mongoose.connect('mongodb://localhost:27017/admission' ,{ useNewUrlParser: true });
    /* 1st {}  similiar to where condition,
     2nd {} selecting required fields to show,
      3rd{} for sorting- "1" for ascending "-1" for descending*/
      seatObj.find({'year':  req.body.params.year,'depname': req.body.params.depValue},
              {seatCount:1, depname : 1},
      function (err, docs) {
                  	if(err)
                        {
                            res.status(500).json(err);
                        }
                    else if(docs)
                        {
                            console.log(docs);
                            res.status(200).json(docs);
                        }
        });
 });
 
const info=mongoose.model('studentinfo',{
    fname :String,
    lname:String,
    DOB:Date,
    male:String,
    Nationality:String,
    Community:String,
    Mobile_Number:String,
    Res_addr:String,
    Email_db:String,
    Premanent_addr:String,
    religion:String,
  age:String,
  Family_name:String,
  Family_occup:String,
  Family_income:String,
  Caste :String,
  degree_BE :String,
  degree_BTECH:String,
  branch_choice1 :String,
  branch_choice2 :String,
  branch_choice3:String,
  previous_medium:String,
   previous_school:String, 
   previous_passing:String,
   previous_regno:String,
  board_state :String,
  board_cbse:String,
  board_other:String,
  hsc_language:String,
  hsc_language_marks:String,
  hsc_language_maxmark:String,
  hsc_english_marks :String,
  hsc_english_maxmark :String,
  hsc_maths_marks:String,
  hsc_maths_maxmark:String,
  hsc_chemistry_marks:String, 
  hsc_chemistry_maxmark :String,
  hsc_physics_marks:String,
   hsc_physics_maxmark:String,
  hsc_total_marks:String, 
  hsc_total_maxmark:String,
   hsc_cutoff:String,
   hsc_percentage:String,
   hsc_culturals:String, 
   hsc_xtra:String,
  hostel_yes:String,
  hostel_no:String,
  first_graduvation_yes :String,
  first_graduvation_no:String,
    flagstatus:Number,
    id:String
    //image:ImageData
})

//const register=mongoose.model('register',{Email :String,password1:String, Confrimpassword : String})
mongoose.connect('mongodb://localhost:27017/admission',{ useNewUrlParser: true });
const Array=mongoose.model('Array',{ array:String})
const register=mongoose.model('register',
{
    Email:String,
    password1:String,
    Confrimpassword:String,
  
})

   /* app.use('/api',function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','POST');
    res.header('Access-Control-Allow-Headers','Accept,Origin,Content-Type,access_token');
    res.header('Access-Control-Allow-Crendentials','true');
    next();
    });*/
    app.post('/apinfo',(req,res)=>{
        console.log(" it Comess..!");
        console.log(req.method);
        
        var infobj =new info();
        //var checkobj =new  check();
    
        infobj.fname=req.body.Fname;
        infobj.lname=req.body.Lname;
        infobj.DOB=req.body.DOB;
        infobj.male=req.body.male;
        infobj.Nationality=req.body.Nationality;
        infobj.Community=req.body.Community;
        infobj.Mobile_Number=req.body.Mobile_Number;
        infobj.Res_addr=req.body.Res_addr;
        infobj.Premanent_addr=req.body.Premanent_addr;
        infobj.Email_db=req.body.Email;
        infobj.religion=req.body.religion;
        infobj.age=req.body.age
        infobj.Family_name=req.body.Family_name
        infobj.Family_occup=req.body.Family_occup
        infobj.Family_income=req.body.Family_income
        infobj.Caste=req.body.Caste
        infobj.degree_BE =req.body.degree_BE
        infobj.degree_BTECH=req.body.degree_BTECH
        infobj.branch_choice1=req.body.branch_choice1
        infobj.branch_choice2=req.body. branch_choice2
        infobj.branch_choice3=req.body.branch_choice3
        infobj.previous_medium=req.body.previous_medium
        infobj.previous_school=req.body.previous_school
        infobj.previous_passing=req.body.previous_passing
        infobj. previous_regno=req.body.previous_regno
        infobj. board_state=req.body. board_state
        infobj.board_cbse=req.body.board_cbse
        infobj.board_other=req.body.board_other
        infobj.hsc_language=req.body.hsc_language
        infobj.hsc_language_marks=req.body.hsc_language_marks
        infobj. hsc_language_maxmark=req.body.hsc_language_maxmark
        infobj. hsc_english_marks=req.body.hsc_english_marks
        infobj.hsc_english_maxmark =req.body.hsc_english_maxmark
        infobj.hsc_maths_marks=req.body.hsc_maths_marks
        infobj. hsc_maths_maxmark=req.body.hsc_maths_maxmark
        infobj. hsc_chemistry_marks=req.body.hsc_chemistry_marks
        infobj. hsc_chemistry_maxmark=req.body.hsc_chemistry_maxmark
        infobj. hsc_physics_marks=req.body.hsc_physics_marks
        infobj. hsc_physics_maxmark=req.body.hsc_physics_maxmark
        infobj.hsc_total_marks=req.body.hsc_total_marks
        infobj.hsc_total_maxmark=req.body.hsc_total_maxmark
        infobj.hsc_cutoff=req.body.hsc_culturals
        infobj. hsc_percentage=req.body.hsc_percentage
        infobj. hsc_culturals=req.body.hsc_culturals
        infobj. hsc_xtra=req.body.hsc_xtra
        infobj.hostel_yes=req.body.hostel_yes
        infobj.hostel_no=req.body.hostel_no
        infobj.first_graduvation_yes=req.body.first_graduvation_yes
        infobj.first_graduvation_no=req.body.first_graduvation_no
        infobj.flagstatus=0;
       /* checkobj.flagcheck=43;
        checkobj.save((err)=>{
            //res.send(infobj);
            console.log("ADDED");
            
       });*/
        
        //infobj.image=req.body.image;
        infobj.save((err)=>{
            res.send(infobj);
            console.log("ADDED");
            
       });
    });
    

/*app.use('/apinew',function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','POST');
    res.header('Access-Control-Allow-Headers','Accept,Origin,Content-Type,access_token');
    res.header('Access-Control-Allow-Crendentials','true');
    next();
    });

 app.post('/apinew',(req,res)=>{
     var registerobj =new register();
     registerobj.Email=req.body.Email;
     console.log(req.body.Email);
     registerobj.password1=req.body.passWord;
     console.log(req.body.passWord1);
     registerobj.Confrimpassword=req.body.confrimpassWord;
     console.log(req.body.Confrimpassword);
            registerobj.save((err)=>{
                res.send(registerobj);
                console.log("ADDED");
            });
});*/
app.get("/api/get_chats/show", (req, res)=>{
    console.log("in getchats api");
  
    info.find({flagstatus:0},
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
           console.log(docs);
         // console.log("suma"+info.Email_db);
            res.status(200).json(docs);
        }
    });
});
app.get("/api/get_chats/accept", (req, res)=>{
    console.log("in getchats api");
  
    info.find({flagstatus:1},
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        { 
            console.log("docs");
           console.log(docs);
         // console.log("suma"+info.Email_db);
            res.status(200).json(docs);
        }
    });
});
app.get("/api/get_chats/decline", (req, res)=>{
    console.log("in getchats api");
  
    info.find({flagstatus:-1},
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
           console.log(docs);
         // console.log("suma"+info.Email_db);
            res.status(200).json(docs);
        }
    });
});
    
   /* info.update({'_id': ObjectId("5c797a6e0cfc092f10257a4e") },{$set:{'flagstatus':7 }},
    
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
            console.log(docs);
            res.status(200).json(docs);
        }
    });*/

    app.get("/api/update/:id", (req, res)=>{
     
                
                console.log(req.params.id);
        //info.update( findById(req.body.id) ,{$set:{'flagstatus':7 }},
       //var infobj =new info();
       // infobj.id=req.body.id;
       
       info.updateOne({'Email_db':req.params.id},{$set:{'flagstatus':1 }},
  
        (err, docs)=>{
        if(err)
            res.status(500).json(err);
        else if(docs)
        {
            console.log(docs);
            res.status(200).json(docs);
        }
    });
    dep= "IT";
var today = new Date();
    var year_value = today.getFullYear();
    console.log("year"+ year_value);

var db = mongoose.connect('mongodb://localhost:27017/admission' ,{ useNewUrlParser: true });
var seatObjVar = new seatObj();
console.log(dep);
seatObj.updateOne( { 'depname' : dep , 'year': year_value } ,
                     { $inc: { 'seatCount': -1 } },
                     function(err, docs) {
                        if(err)
                        {
                            console.log("error--- ");
                            console.log(err);
                        }
                            else if(docs)
                            {
                            console.log("success---");
                            console.log(docs);
                            }      
                        });
    });
    app.get("/api/update/decline/:id", (req, res)=>{
     
                
        console.log(req.params.id);
//info.update( findById(req.body.id) ,{$set:{'flagstatus':7 }},
//var infobj =new info();
// infobj.id=req.body.id;

info.updateOne({'Email_db':req.params.id},{$set:{'flagstatus':-1 }},

(err, docs)=>{
if(err)
    res.status(500).json(err);
else if(docs)
{
    console.log(docs);
    res.status(200).json(docs);
}
});
dep= "IT";
var today = new Date();
    var year_value = today.getFullYear();
    console.log("year"+ year_value);

var db = mongoose.connect('mongodb://localhost:27017/admission' ,{ useNewUrlParser: true });
var seatObjVar = new seatObj();
console.log(dep);
seatObj.updateOne( { 'depname' : dep , 'year': year_value } ,
                     { $inc: { 'seatCount':0} },
                     function(err, docs) {
                        if(err)
                        {
                            console.log("error--- ");
                            console.log(err);
                        }
                            else if(docs)
                            {
                            console.log("success---");
                            console.log(docs);
                            }      
                        });
});
app.post('/api',(req,res)=>{
    console.log(" it Comess..post!");
register.
findOne({
    Email:req.body.Email,
    password1:req.body.passWord},
    {Email:1},
    (err,doc)=>{
        if(err)
            res.status(500).json(err);
        else if(doc)
        { 
            console.log(doc);
            res.status(200).json(doc);
        }
        else
        res.status(401).json({msg:"Invalid login details..!api"}); 
         });
});
app.post('/api/staff',(req,res)=>{
    console.log(" it Comess..post!");
register.
findOne({
    Email:req.body.Email,
    password1:req.body.passWord},
    {Email:1},
    (err,doc)=>{
        if(err)
            res.status(500).json(err);
        else if(doc)
        { 
            console.log(doc);
            res.status(200).json(doc);
        }
        else
        res.status(401).json({msg:"Invalid login details..!"}); 
         });
});


app.post('/apinew',(req,res)=>{
console.log("inside api new");
console.log(req.body.Email + req.body.confrimpassWord+req.body.passWord );
var registerobj =new register();
registerobj.Email=req.body.Email;
console.log(req.body.Email);
registerobj.password1=req.body.passWord;
console.log(req.body.passWord1);
registerobj.Confrimpassword=req.body.confrimpassWord;
console.log(req.body.Confrimpassword);
registerobj.save((err)=>{
res.send(registerobj);
console.log("ADDED");
});
});

app.post("/api/del_content", (req, res)=>{

   
    //var dbname= req.body.params.year;
    //console.log("dep name:" + dbname);
    var db = mongoose.connect('mongodb://localhost:27017/admission' ,{ useNewUrlParser: true });
     //var db = mongoose.connect('mongodb://localhost:27017/'+dbname ,{ useNewUrlParser: true });
     /* 1st {}  similiar to where condition,
      2nd {} selecting required fields to show,
       3rd{} for sorting- "1" for ascending "-1" for descending*/
     //  var Faculty = new Facultyobj();
       //console.log(req.body.params.facultyname);
   //var seatObjtemp = new seatObj();
       seatObj.deleteMany( { year : req.body.params.year },function (err, docs) {
                     if(err)
                         {
                             res.status(500).json(err);
                         }
                     else if(docs)
                         {
                             console.log(docs);
                             res.status(200).json(docs);
                         }
       });
       
  });