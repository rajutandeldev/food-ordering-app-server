import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UserLoginReqDto {
    @ApiProperty({
        description: "Email of the user",
        example: "john.doe@example.com"
    })
    @IsString()
    userName: string;

    @ApiProperty({
        description: "Password of the user",
        example: "password123"
    })
    @IsString()
    userPassword: string;
}