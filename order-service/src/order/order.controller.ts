import { Body, Controller, Post, Request } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}
    @Post('addOrder')
    addOrder(@Body() body: any, @Request() req: any) {
        console.log(body,req.user);
        return this.orderService.addOrder(body, req.user);
    }
}
