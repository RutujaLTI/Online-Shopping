import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RetailerService } from '../services/RetailerService';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {

  message:string;
  user:User;
  constructor(private retailerService:RetailerService,private router:Router,private sesion:SessionService) { 
    this.user=new User();
    this.message='';
  }

  ngOnInit(): void {
    this.sesion.getUSer().subscribe((data)=>
    {
      if(data==null||data.userRole!='Admin')this.router.navigate(['**']);
    });
  }

  register()
  {
    if(this.retailerService.register(this.user))
    {
      this.router.navigate(['admin']);
    }
    else
    {
      this.message='Email already exsists';
    }
  }
  cancel()
  {
    this.router.navigate(['admin']);
  }

}
