export class product
{
    productId:number;
    productName:string;
    description:string;
    unitPrice:number;
    stock:number;
    image1:string;
    image2:string;
    image3:string;
    image4:string;
    brand:string;
    categoryId:number;
    retailerId:number;
    status:string;
    remarks:string;
    
    constructor(productName?,unitPrice?,image1?){
        this.productName=productName;
        this.unitPrice=unitPrice;
        this.image1=image1;
    }
}