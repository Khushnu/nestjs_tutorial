import {
    Body, Controller, Delete, Get, HttpCode,
    Param, Patch, Post, Query, ParseIntPipe, ValidationPipe,
    BadRequestException,
    UseFilters,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { CreateUserDTO } from './dto/userDto';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto/updateUserDTO';
import { UserCustomException } from './user.customexception';
import { UserGuard } from './user.guard';
import { UserInterceptor } from './user.interceptor';



@Controller("user")
@UseInterceptors(UserInterceptor)
export class UserController {

    constructor(private readonly userServices: UserService) { }
    @Get()
    // @UseGuards(new UserGuard)
    findAlluser(@Query('role') role?: 'Admin' | 'Customer') {
        return {
            Message: true,
            data: this.userServices.finadAll(role)
        }
    }

    @Get(":id")
    @HttpCode(200)
    // @UseFilters(UserCustomException)
    
    findOne(@Param('id', ParseIntPipe) id: number): {} {

        // throw new BadRequestException()
        return {
            message: true,
            data: this.userServices.findOne(id)
        };
    }

    @Post('sign_up')
    @HttpCode(201)
    @UseInterceptors(UserInterceptor)
    create(@Body(ValidationPipe) createUser: CreateUserDTO) {
        return {
            message: true,
            data: this.userServices.create(createUser)
        };
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe)
     updatedUser: UpdateUserDTO) {
        return {
            message: true,
            data: this.userServices.update(id, updatedUser)
        }
    }

    @Delete('delete_user/:id')
    deleteuser(@Param('id', ParseIntPipe) id: number) {
        return {
            message: true,
            data: this.userServices.deleteuser(id)
        };
    }

}