import { ApiProperty } from "@nestjs/swagger";

export class MenuItemsReqDto {
    @ApiProperty({
        description: 'ID of the restaurant to which the menu item belongs',
        example: 'abc123',
    })
    restaurantId: string;
    @ApiProperty({
        description: 'Name of the menu item',
        example: 'Burger',
    })
    name: string;
    @ApiProperty({
        description: 'Description of the menu item',
        example: 'A delicious burger with lettuce and tomato',
    })
    description: string;
    @ApiProperty({
        description: 'Price of the menu item',
        example: 10.99,
    })
    price: number;
    @ApiProperty({
        description: 'Category of the menu item',
        example: 'Main Course',
    })
    category: string;

   
    @ApiProperty({
        description: 'Availability status of the menu item',
        example: true,
    })
    is_available: boolean;
}