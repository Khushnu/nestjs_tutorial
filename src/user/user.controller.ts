import {
    Body, Controller, Delete, Get, HttpCode,
    Param, Patch, Post, Query, ParseIntPipe, ValidationPipe
} from '@nestjs/common';
import { CreateUserDTO } from './dto/userDto';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/updateUserDTO';

@Controller("user")
export class UserController {

    constructor(private readonly userServices: UserService) { }

    @Get()
    findAlluser(@Query('role') role?: 'Admin' | 'Customer') {
        return {
            Message: true,
            data: this.userServices.finadAll(role)
        }
    }

    @Get(":id")
    @HttpCode(200)
    findOne(@Param('id', ParseIntPipe) id: number): {} {
        return {
            message: true,
            data: this.userServices.findOne(id)
        };
    }

    @Post('sign_up')
    @HttpCode(201)
    create(@Body(ValidationPipe) createUser: CreateUserDTO) {
        return {
            message: true,
            data: this.userServices.create(createUser)
        };
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updatedUser: UpdateUserDTO) {
        return {
            message: true,
            data: this.userServices.update(id, updatedUser)
        }
    }

    @Delete(':id')
    deleteuser(@Param('id', ParseIntPipe) id: number) {
        return {
            message: true,
            data: this.userServices.deleteuser(id)
        };
    }

}