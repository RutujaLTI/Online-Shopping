import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { AddproductService } from '../services/addproduct.service';
import { AddProduct } from '../models/addproduct.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm:FormGroup;
  showToggle:Boolean;
  showModal: Boolean;
  product:AddProduct;
  products;
  productIdtoUpdate = null; 
message = null;
datasaved = false;

  constructor(private addprodService:AddproductService,private fb: FormBuilder) {
    this.product = new AddProduct();
    this.myForm= this.fb.group({
      ProdId:new FormControl('',Validators.required),
      PName:new FormControl('',Validators.required),
      Quan:new FormControl('',Validators.required),
      Price:new FormControl('',Validators.required),
      Desc:new FormControl('',Validators.required),
      Pic:new FormControl('',Validators.required),
      Retailer: new FormControl('',Validators.required),
      Category: new FormControl('',Validators.required),
      Brand: new FormControl('',Validators.required)
    }),
    this.showToggle=false;
   }
   public get ProdId(){
    return this.myForm.get('ProdId');
  }
  public get PName(){
    return this.myForm.get('PName');
  }
  public get Quan(){
    return this.myForm.get('Quan');
  }
  public get Price(){
    return this.myForm.get('Price');
  }
  public get Desc(){
    return this.myForm.get('Desc');
  }
  public get Pic(){
    return this.myForm.get('Pic');
  }
  public get Retailer(){
    return this.myForm.get('Retailer');
  }
  public get Category(){
    return this.myForm.get('Category');
  }
  public get Brand(){
    return this.myForm.get('Brand');
  }
  get f() {
    return this.myForm.controls;
    }

    initializeFromGroup(){
     this.myForm.setValue({
         ProdId: '',
         PName: '',
         Quan: '',
         Price: '',
         Desc: '',
         Pic: '',
         Retailer: '',
         Category: '',
         Brand: ''
     });
 }
 show()
 {
   this.showModal = true;
   
 }
 hide()
  {
    this.myForm.reset();
    this.initializeFromGroup();
    this.showModal = false;
  }
  onSubmit() 
  {
    if(this.myForm.valid)
    {
      this.product.Product_Id =this.ProdId.value;
      this.product.Product_Name =this.PName.value;
      this.product.Quantity =this.Quan.value;
      this.product.Unit_Price =this.Price.value;
      this.product.Product_Description =this.Desc.value;
      this.product.Pictures =this.Pic.value;
      this.product.Category_Id =this.Category.value;
      this.product.Retailer_Id =this.Retailer.value;
      this.product.BrandName =this.Brand.value;
      if(this.productIdtoUpdate==null)
      {
        this.addprodService.AddProduct(this.product).subscribe(()=>
        {
          //console.log(data);
          //this.products = data;
          this.datasaved = true;
          this.message = "Data Inserted";
          this.addprodService.getProducts();
          this.productIdtoUpdate = null;
          this.myForm.reset();
        });
      } 
      this.hide();
    }
  }
  Delete(prodId:string)
{
this.addprodService.delProduct(prodId).subscribe(()=>
{
  this.message = "Deleted";
  this.addprodService.getProducts();
  this.productIdtoUpdate = null;
  this.myForm.reset();
})
}
  onClose(){
    this.myForm.reset();
  }

  ngOnInit(): void {
  }

}