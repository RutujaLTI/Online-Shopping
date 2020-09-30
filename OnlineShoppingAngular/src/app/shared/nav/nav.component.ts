import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { User } from 'src/app/models/user';
import { CompareProductsService } from 'src/app/services/CompareProductsService';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,DoCheck {

  user:User;
  constructor(private router:Router,private compare:CompareProductsService,private localStorage:LocalStorageService) {
    this.user=null;
   }

  ngOnInit(): void {
  }
  ngDoCheck()
  {
    this.user=this.localStorage.retrieve('user');
  }
  signOut()
  {
    this.localStorage.clear('user');
    this.compare.removeAll().subscribe((data)=>
    {
      
    });

  }

}
