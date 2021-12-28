import { Component } from '@angular/core';
import { GetService } from './services/get.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routes-and-navigation';
  username="";
  password="";
  data:any;
  users=[];
  error="";
  login_show=false;
  constructor(private get : GetService, private router: Router){}
  ngOnInit(){
    this.get.getUsers().subscribe((result:any)=>{
        this.users=result;
    });
  }
  getData(){
    // console.log(this.username,this.password,this.users);
    if(this.users.findIndex(x => x["name"] === this.username)!==-1){
        this.data=this.users[this.users.findIndex(x => x["name"] === this.username)];
       
        if(this.data["password"]===this.password){
          // console.log(this.data);
          this.login_show=true;
          this.router.navigate(['/home']);
          localStorage.setItem("currentUser",JSON.stringify(this.data));
        }
        else{
          this.error="Password is Invalid";
          this.username='';
          this.password='';
          this.router.navigate(['/']);
          this.login_show=false;
        }
    }
    else{
      this.error="Username is Invalid";
      this.username='';
      this.password='';
    }
  }
}
