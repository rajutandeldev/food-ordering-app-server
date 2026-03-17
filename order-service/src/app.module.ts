import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard, ResponseInterceptor } from 'nest-utilities';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MenuItemsController } from './menu-items/menu-items.controller';
import { MenuItemsService } from './menu-items/menu-items.service';
import { MenuItemsModule } from './menu-items/menu-items.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OrderModule,
    RestaurantsModule,
    MenuItemsModule
  ],
  controllers: [AppController, RestaurantsController, MenuItemsController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor
    },
    RestaurantsService,
    MenuItemsService

  ],
})
export class AppModule {}
