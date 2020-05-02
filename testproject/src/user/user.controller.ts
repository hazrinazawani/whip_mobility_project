import { Controller, Post, Body } from '@nestjs/common';

import { userService } from './user. service';

@Controller('user')
export class userController{
    userService: any;

    @Post()
    addUser(
        @Body('id')user_Id:String, 
        @Body('username')user_UserName:String, 
        @Body('password')user_PassWord:String,
        @Body('plate_number')user_PlateNumber:Number) : any{

            this.userService.insertUser(user_Id,user_UserName,user_PassWord,user_PlateNumber);

    }
}

