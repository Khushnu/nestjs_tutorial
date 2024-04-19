import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/userDto';
import { UserService } from './user.service';

@Controller("user")
export class UserController {

    constructor(private readonly userServices: UserService) { }

    // @Get()
    // findone(): string {
    //     return 'one'
    // }
    @Get()
    findAlluser(@Query('role') role?: 'Admin' | 'Customer') {
        return {
            Message: true,
            data: this.userServices.finadAll(role)
        }
    }

    @Get(":id")
    @HttpCode(200)
    findOne(@Param('id') id: string): {} {
        return {
            message: true,
            data: this.userServices.findOne(+id)
        };
    }

    @Post('add_user')
    @HttpCode(201)
    create(@Body() createUser: { name: string, email: string, role: 'Admin' | 'Customer' }) {
        return {
            message: true,
            data: this.userServices.create(createUser)
        };
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatedUser: { name?: string, email?: string, role?: 'Admin' | 'Customer' }) {
        return {
            message: true,
            data: this.userServices.update(+id, updatedUser)
        }
    }

    @Delete(':id')
    deleteuser(@Param('id') id: string) {
        return {
            message: true,
            data: this.userServices.deleteuser(+id)
        };
    }

}
