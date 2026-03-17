import { Injectable } from '@nestjs/common';
import { PlaceOrderReqDto } from './dto/place-order-req.dto';
import { Orders } from './type/all_types';
import { db } from 'src/db/initialize-db';

@Injectable()
export class OrderService {
    async placeOrder(placeOrder: PlaceOrderReqDto, userId: string) {

        try {
            const transformInsertData: Orders = {
                user_id: userId,
                restaurant_id: placeOrder.restaurantId,
                total_amount: placeOrder.totalAmount,
                order_status: 'pending',
                payment_status: 'pending',
                created_at: new Date(),
                updated_at: new Date(),
                created_by: userId,
                updated_by: userId
            }

            const insertOrderData = await db.collection('orders').add({
                ...transformInsertData
            });
            return { message: "Order placed successfully", orderId: insertOrderData.id };

        } catch (error) {
            throw new Error("Failed to place order: " + error.message);
        }
    }
}
