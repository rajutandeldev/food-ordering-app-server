import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    addOrder(body: any, user: any) {
        return "This is order service";
    }
}
