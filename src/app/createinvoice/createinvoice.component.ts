import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-createinvoice',
  templateUrl: './createinvoice.component.html',
  styleUrls: ['./createinvoice.component.css']
})
export class CreateinvoiceComponent implements OnInit {

  constructor(private home:HomeComponent) { 
    this.home.welcome='';
    this.home.show=true;
  }

  ngOnInit(): void {

  }

}
