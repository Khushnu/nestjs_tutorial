import {PartialType } from '@nestjs/mapped-types'
import { CreateUserDTO } from './userDto';

export class UpdateUserDTO extends PartialType(CreateUserDTO){

}