export class User
{   
    id:number;
    name:string;
    email:string;
    password:string;
    mobile:string;
    address:string;

    constructor(id?,name?,email?,password?,mobile?,address?)
    {   
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.mobile=mobile;
        this.address=address;
    }
    
}