import { Injectable } from '@nestjs/common';
import { AddRestaurantDto } from './dto/addRestaurant.dto';
import { db } from 'src/db/initialize-db';

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
            return { message: "Restaurant added successfully", data: AddRestaurantData.id };
        } catch (error) {
            throw new Error("Failed to add restaurant: " + error.message);
        }
    }

    async updateRestaurant(body: any) {
        return "This is restaurant service";
    }

    async fetchRestaurants() {
        try{
            const fetchRestaurantsData = await db.collection('restaurants').get();
            return fetchRestaurantsData.docs.map(doc =>{
                const {created_at, updated_at,created_by, updated_by, ...rest} = doc.data();
                return {
                    id: doc.id,
                    ...rest
                }
            }
              
            );
        }catch(error){
            throw new Error("Failed to fetch restaurants: " + error.message);
        }
       
    }

    async deleteRestaurant(body: any) {
        return "This is restaurant service";
    }
}
