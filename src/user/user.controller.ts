import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/userDto';

@Controller("user")
export class UserController {
// @Get()
// findone(): string {
//     return 'one'
// }
@Get(":id")
@HttpCode(200)
findAll(@Param('id') id: string): {} {
return {
    userId : id
};
}

@Post('add_user')
@HttpCode(201)
create(@Body() createUser: CreateUserDTO)  {
    return {
        message: true, 
        data : createUser 
    };
}
}
