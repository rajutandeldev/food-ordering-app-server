import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserReqDto } from './dto/user-req.dto';
import { UserLoginReqDto } from './dto/user-login-req.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Post('registration')
    async registration(@Body() userReqDto: UserReqDto) {
         return this.usersService.registration(userReqDto)
    }

    @Post('login')
    async login(@Body() userLoginDto: UserLoginReqDto) {
        return this.usersService.login(userLoginDto)
    }
}
