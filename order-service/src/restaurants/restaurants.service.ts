import { Injectable } from '@nestjs/common';
import { AddRestaurantDto } from './dto/addRestaurant.dto';
import { db } from 'src/db/initialize-db';
import { messaging } from 'firebase-admin';

@Injectable()
export class RestaurantsService {
    async addRestaurant(AddRestaurantDto: AddRestaurantDto, userId?: string) {
        const createdBy = userId ?? null;

        try {
            const AddRestaurantData = await db.collection('restaurants').add({
                ...AddRestaurantDto,
                created_at: new Date(),
                updated_at: new Date(),
                created_by: createdBy,
                updated_by: createdBy,
            });
            return { messaging: "Restaurant added successfully", data: AddRestaurantData.id };
        } catch (error) {
            throw new Error("Failed to add restaurant: " + error.message);
        }
    }

    async updateRestaurant(body: any) {
        return "This is restaurant service";
    }

    async fetchRestaurants() {
        return "This is restaurant service";
    }

    async deleteRestaurant(body: any) {
        return "This is restaurant service";
    }
}
