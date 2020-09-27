export class User
{   
    id:number;
    name:string;
    email:string;
    password:string;
    mobile:string;
    role:string;

    constructor(id?,name?,email?,password?,mobile?,role?)
    {   
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.mobile=mobile;
        this.role=role;
    }
    
}