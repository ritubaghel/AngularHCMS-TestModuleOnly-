import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _header:MenuServiceService) { }

  ngOnInit(){
    this._header.loginlink.next(true)
  }

}
