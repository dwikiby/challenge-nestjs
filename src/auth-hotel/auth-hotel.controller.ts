import { Controller, Body, Post, UseGuards, Req } from '@nestjs/common';
import { AuthHotelCredentialsDto } from './dto/auth-hotel.credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';
import { AuthHotelService } from './auth-hotel.service';
import { JwtPayLoad } from './jwt-payload.interface';


@Controller('auth-hotel')
export class AuthHotelController {
    constructor(private authHotelService: AuthHotelService) { }

    @Post('/signup')
    signUp(@Body() authHotelCredentialDto: AuthHotelCredentialsDto): Promise<void> {
        return this.authHotelService.signUp(authHotelCredentialDto);
    }


    @Post('/signin')
    signIn(@Body() authHotelCredentialDto: AuthHotelCredentialsDto): Promise<{ accessToken: string }> {
        return this.authHotelService.signIn(authHotelCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() request: JwtPayLoad) {
        console.log(request);
    }

}
