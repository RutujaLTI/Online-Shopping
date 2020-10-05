import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/CategoryService';
import { CompareProductsService } from 'src/app/services/CompareProductsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  title = 'OnlineShoppingAngular';

  user:User;
  categories:Category[];
  constructor(private router:Router,private compareService:CompareProductsService,private localStorage:LocalStorageService,private categoryService:CategoryService) 
  {
    this.user=null;
    this.categoryService.getCategories().subscribe((data)=>
    {
      this.categories=data;
    });
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
    this.compareService.removeAll().subscribe((data)=>
    {
      //Products in compare cleared
    });

  }
  categoryView(id:number)
  {
    this.router.navigate(['/list',{id:id}])
  }
}
