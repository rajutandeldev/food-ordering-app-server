import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UserReqDto {
    @ApiProperty({
        description: "Name of the user",
        example: "John Doe",
        type: String,
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "Email of the user",
        example: "john@gmail.com"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "Password of the user",
        example: "password123"
    })
    @IsString()
    password: string;
   
}