import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  

  ngOnInit() {
  }
  constructor(private router:Router){}
  dashboardFunction(){
    this.router.navigate(["/","seat"]);
  }
  
}
