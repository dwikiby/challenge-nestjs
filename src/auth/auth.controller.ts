import { Controller, Body, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthGuard } from '@nestjs/passport'
import { JwtPayLoad } from './jwt-payload.interface';
import { request } from 'http';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    signUp(@Body() authCredentialDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredentialDto)
    }

    @Post('/signin')
    signIn(@Body() authCredentialDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.signIn(authCredentialDto)
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() request: JwtPayLoad) {
        console.log(request);
    }
}
