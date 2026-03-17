import { Injectable } from '@nestjs/common';
import { MenuItemsReqDto } from './dto /menu-items-req.dto';
import { db } from 'src/db/initialize-db';
import { MenuItemsMaster } from 'src/order/type/all_types';

@Injectable()
export class MenuItemsService {
    async addMenuItem(MenuItemsReqDto: MenuItemsReqDto, userId: string) {
         const createdBy = userId ?? null;
        const AddMenuItemData: MenuItemsMaster = {
            name: MenuItemsReqDto.name,
            description: MenuItemsReqDto.description,
            price: MenuItemsReqDto.price,
            category: MenuItemsReqDto.category,
            restaurantId: MenuItemsReqDto.restaurantId,
            is_available: MenuItemsReqDto.is_available,
            created_at: new Date(),
            updated_at: new Date(),
            created_by: createdBy,
            updated_by: createdBy,
        }
        try {
            const AddRestaurantData = await db.collection('menu_items_master').add({
                ...AddMenuItemData
            });
            return { message: "Menu item added successfully", data: AddRestaurantData.id };
        } catch (error) {
            throw new Error("Failed to add menu item: " + error.message);
        }
    }

    async fetchMenuItems() {
        try{
            const fetchMenuItemsData = await db.collection('menu_items_master').get();
            return fetchMenuItemsData.docs.map(doc =>{
                const {created_at, updated_at,created_by, updated_by, ...rest} = doc.data();
                return {
                    id: doc.id,
                    ...rest
                }
            }
              
            );
        }catch(error){
            throw new Error("Failed to fetch menu items: " + error.message);
        }
       
    }
}
