import { Injectable } from '@nestjs/common';

import { User } from './user. model';

@Injectable()
export class userService{

    user : User[] = [];

    insertUser(id:String, username:String, password:String, plate_number:number){

        const newUser = new User(id, username,password,plate_number);

        this.user.push(newUser);



    }
}


