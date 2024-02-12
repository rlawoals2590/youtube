import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    name: string | null;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}