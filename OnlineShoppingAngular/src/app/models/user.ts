export class User
{   
    userId:number;
    userName:string;
    userEmail:string;
    userPassword:string;
    userPhone:string;
    userRole:string;

    constructor(id?,name?,email?,password?,mobile?,role?)
    {   
        this.userId=id;
        this.userName=name;
        this.userEmail=email;
        this.userPassword=password;
        this.userPhone=mobile;
        this.userRole=role;
    }
    
}