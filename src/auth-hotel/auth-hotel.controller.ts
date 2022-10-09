import { Controller, Body, Post, UseGuards, Req } from '@nestjs/common';
import { AuthHotelCredentialsDto } from './dto/auth-hotel.credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { AuthHotelService } from './auth-hotel.service';
import { JwtPayLoad } from './jwt-payload.interface';
import { LoginAuthCredentialsDto } from './dto/login-auth.credentials.dto';


@Controller('auth-hotel')
export class AuthHotelController {
    constructor(private authHotelService: AuthHotelService) { }

    @Post('/signup')
    signUp(@Body() authHotelCredentialDto: AuthHotelCredentialsDto): Promise<void> {
        return this.authHotelService.signUp(authHotelCredentialDto);
    }


    @Post('/signin')
    signIn(@Body() loginCredentialDto: LoginAuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authHotelService.signIn(loginCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() request: JwtPayLoad) {
        console.log(request);
    }

}
