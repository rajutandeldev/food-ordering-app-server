import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNumber } from "class-validator"

export class AddRestaurantDto {
    @ApiProperty({
        description: 'Name of the restaurant',
        example: 'Pizza Hut'
    })
    @IsString()
    name: string

    @ApiProperty({
        description: 'Location of the restaurant',
        example: '123 Main St'
    })
    @IsString()
    location: string

    @ApiProperty({
        description: 'Phone number of the restaurant',
        example: '+1234567890'
    })
    @IsString()
    phone: string

    @ApiProperty({
        description: 'Rating of the restaurant',
        example: 4.5
    })
    @IsNumber()
    rating: number
}