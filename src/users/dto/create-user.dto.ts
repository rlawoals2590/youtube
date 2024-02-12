import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string | null;

    @IsString()
    @IsNotEmpty()
    name: string | null;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}