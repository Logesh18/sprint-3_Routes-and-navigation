import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show=false;
  welcome="";
  nav=false;
  temp={
    name:'',
    password:'',
    role:''
  };
  constructor(private app:AppComponent, private router: Router) { 
      this.app.error='';
      this.app.login_show=true;
      this.temp=JSON.parse(''+localStorage.getItem("currentUser"));
      this.welcomeMessage();
      // console.log(this.temp.role);
  }

  ngOnInit() {
    
  }
  welcomeMessage(){
    if(this.temp.role==='user'){
      this.welcome=`<p id="welcomeUser">Welcome User</p>`;
    }
    else if(this.temp.role==='admin'){
      this.welcome=`<p id="welcomeAdmin">Welcome Admin</p>`;
    }
    else{
      this.welcome=`<p id="welcomeSuperAdmin">Welcome Super Admin</p>`;
    }
  }
  home(){
    this.welcomeMessage();
    this.router.navigate(['home']);
    this.app.login_show=true;
    this.show=false;
    this.nav=false;
  }
  view(){
     this.nav=false;
     this.app.login_show=true;
     if(this.temp.role==='user'){
      this.router.navigate(['home/view-invoice']);
      this.welcome=``;
      this.show=true;

     }
     else{
      //  console.log("You cannot have access to this page");
       this.router.navigate(['home']);
       this.show=false;
       this.welcomeMessage();
     }
  }
  create(){
    this.app.login_show=true;
    this.nav=false;
    if(this.temp.role==='admin'){
      this.router.navigate(['home/create-invoice']);
      this.show=true;
      this.welcome=``;
     }
     else{
      // console.log("You cannot have access to this page");
      this.router.navigate(['home']);
      this.show=false;
      this.welcomeMessage();
    }
  }
  update(){
    this.app.login_show=true;
    this.nav=false;
    if(this.temp.role==='superadmin'){
      this.router.navigate(['home/update-invoice']);
      this.show=true;
      this.welcome=``;
    }
    else{
      // console.log("You cannot have access to this page");
      this.router.navigate(['home']);
      this.show=false;
      this.welcomeMessage();
    }
  }
  logout(){
       this.router.navigate(['/']);
       this.app.login_show=false;
       this.app.username='';
       this.app.password='';
       this.nav=true;
       this.show=true;
       this.welcome=``;
       localStorage.clear();
  } 
  

}
