import { Body, Controller, Post, Request } from '@nestjs/common';
import { OrderService } from './order.service';
import { PlaceOrderReqDto } from './dto/place-order-req.dto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}
    @Post('place-order')
    placeOrder(@Body() PlaceOrderReqDto: PlaceOrderReqDto, @Request() req: any) {
        return this.orderService.placeOrder(PlaceOrderReqDto, req.user.userId);
    }
}
