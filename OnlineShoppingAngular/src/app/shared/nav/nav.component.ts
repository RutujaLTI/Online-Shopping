import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,DoCheck {

  user:User;
  constructor(private service:SessionService,private router:Router) {
    this.service.getUSer().subscribe((data)=>
    {
      this.user=data;
    });
   }

  ngOnInit(): void {
  }
  ngDoCheck()
  {
    this.service.getUSer().subscribe((data)=>
    {
      this.user=data;
    });
  }
  signOut()
  {
    this.service.setUser(null).subscribe((data)=>
    {
      this.router.navigate(['/']);
      console.log('user');
    });
  }

}
