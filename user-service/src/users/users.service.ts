import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserReqDto } from './dto/user-req.dto';
import { db } from 'db/initialize-db';
import { map } from 'rxjs';
import { AppErrorCodes } from 'firebase-admin/app';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { UserLoginReqDto } from './dto/user-login-req.dto';
import { JwtService } from '@nestjs/jwt';

interface User {
    user_name: string,
    user_email: string,
    user_password: string,
    is_active: boolean,
    created_at: Date,
    updated_at: Date
}
@Injectable()
export class UsersService {
    constructor(private jwtService: JwtService) {}
    async registration(userReqDto: UserReqDto) {
        const getUserData = await db.collection('user')
        .where('user_email', '==', userReqDto.email)
        .get()
        const fetchedData = getUserData.docs.map(doc => { 
            console.log(doc.id, '=>', doc.data());
            return doc.data(); 
        });
        
        if(fetchedData.length > 0) {
            throw new Error("User already exists");
        }

        const insertData: User = {
            user_name: userReqDto.name,
            user_email: userReqDto.email,
            user_password: userReqDto.password,
            is_active: true,
            created_at: new Date(),
            updated_at: new Date()
        }
        const docRef = await db.collection('user').add(insertData);
        return { message: "User Registration successful", userId: docRef.id }
    }

    async login(userLoginDto: UserLoginReqDto) {
        const getUserData = await db.collection('user')
        .where('user_name', '==', userLoginDto.userName)
        .where('user_password', '==', userLoginDto.userPassword)
        .get()
        const fetchedData = getUserData.docs.map(doc => { 
            console.log(doc.id, '=>', doc.data());
            const data = doc.data() as User;
            return {
                id: doc.id,
                ...data
            }; 
        });
        
        if(fetchedData.length === 0) {
            throw new UnauthorizedException("Invalid username or password");
        }
        // console.log(fetchedData)
        const extractData = fetchedData[0]
        return { 
            token: this.jwtService.sign({
                userName:extractData.user_name, 
                userEmail: extractData.user_email,
                userId: extractData.id
        }) }
    }
}
