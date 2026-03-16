import { Body, Controller, Delete, Post, Put, Request,  } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { AddRestaurantDto } from './dto/addRestaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService: RestaurantsService){}
    @Post('addRestaurant')
    addRestaurant(@Body() AddRestaurantDto: AddRestaurantDto, @Request() req: any) {
        console.log(AddRestaurantDto, req.user);
        return this.restaurantsService.addRestaurant(AddRestaurantDto, req.user?.userId);
    }

    @Put('updateRestaurant')
    updateRestaurant(@Body() body: any) {
        return this.restaurantsService.updateRestaurant(body);
    }

    @Post('fetchRestaurants')
    fetchRestaurants() {
        return this.restaurantsService.fetchRestaurants();
    }

    @Delete('deleteRestaurant') 
    deleteRestaurant(@Body() body: any) { 
        return this.restaurantsService.deleteRestaurant(body); 
    } 
}
