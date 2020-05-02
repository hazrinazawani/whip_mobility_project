export class User{

    id : String
    user_name : String
    password : String
    plate_number : number

    constructor(id:String, user_name:String, password:String, plate_number:number){
        
        this.id = id;
        this.user_name = user_name;
        this.password = password; 
        this.plate_number = plate_number;
    }

}