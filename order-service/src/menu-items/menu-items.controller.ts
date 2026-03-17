import { Body, Controller, Post, Request } from '@nestjs/common';
import { MenuItemsReqDto } from './dto /menu-items-req.dto';
import { MenuItemsService } from './menu-items.service';

@Controller('menu-items')
export class MenuItemsController {
    constructor(private readonly menuItemsService: MenuItemsService) {}
    @Post('addMenuItem')
    addMenuItem(@Body() MenuItemsReqDto: MenuItemsReqDto, @Request() req: any) {
        const userId = req.user.userId;
        return this.menuItemsService.addMenuItem(MenuItemsReqDto, userId);
    }

    @Post('updateMenuItem')
    updateMenuItem() {
        return "This is menu items controller";
    }

    @Post('fetchMenuItems')
    fetchMenuItems() {
        return this.menuItemsService.fetchMenuItems();
    }

    @Post('deleteMenuItem') 
    deleteMenuItem() { 
        return "This is menu items controller"; 
     }
}
