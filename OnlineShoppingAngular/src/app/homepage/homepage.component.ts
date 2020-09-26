import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private myRouter:Router) { }

goToProductsPage()
{
  this.myRouter.navigate(['products']);
}

  ngOnInit(): void {
  }

}
