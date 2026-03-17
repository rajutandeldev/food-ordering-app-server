import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate, validate } from "class-validator";

export class items {
    @ApiProperty({
        description: 'ID of the menu item being ordered',
        example: 'abc123',
    })
    @IsNotEmpty()
    menuItemId: string;
    @ApiProperty({
        description: 'Quantity of the menu item being ordered',
        example: 2,
    })
    @IsNotEmpty()
    quantity: number; 
}

export class PlaceOrderReqDto {
    @ApiProperty({
        description: 'ID of the restaurant for which the order is being placed',
        example: 'def456',
    })
    @IsNotEmpty()
    restaurantId: string;

    @ApiProperty({
        description: 'List of items being ordered',
        example: [{
            menuItemId: 'abc123',
            quantity: 2,
        }]
    })
    @IsNotEmpty()
    @Validate(items, { each: true })
    items: items[];
    @ApiProperty({
        description: 'Total amount for the order',
        example: 21.98,
    })
    totalAmount: number;
}
