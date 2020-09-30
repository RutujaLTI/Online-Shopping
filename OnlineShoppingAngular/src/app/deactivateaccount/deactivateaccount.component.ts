import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-deactivateaccount',
  templateUrl: './deactivateaccount.component.html',
  styleUrls: ['./deactivateaccount.component.css']
})
export class DeactivateaccountComponent implements OnInit {
  user:User;
  //set userid using session
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  deactivateAccount()
  {
    this.userService.deactivateAccount(this.user).subscribe();
  }
}
