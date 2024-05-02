import { IsEmail, IsString, IsNotEmpty, IsEnum, IsPhoneNumber } from "class-validator";

export class CreateUserDTO  {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail() 
    email: string; 

    @IsPhoneNumber()
    phone: string;

    @IsEnum(['Admin', 'Customer',], {
        message: 'Valid Role is Required Either it will be Admin or Customer '
    })
    role: 'Admin' | 'Customer' 
}