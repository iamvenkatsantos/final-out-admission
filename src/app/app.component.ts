import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  dashboardFunction(){
    this.router.navigate(["/","seat"]);
  }
  alertFunction(){
    this.router.navigate(["/","login-signup"]);
  }
  ngOnInit(){
    var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    (<HTMLElement>x[i]).style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  (<HTMLElement>x[myIndex-1]).style.display = "block";  
  setTimeout(carousel, 4000);    
}
  }

}
