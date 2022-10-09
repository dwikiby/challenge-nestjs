import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JwtPayLoad } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ) { }

    //signup
    async signUp(authCredentialDto: AuthCredentialsDto): Promise<void> {
        return this.userRepository.createUser(authCredentialDto);
    }

    //untuk login
    async signIn(
        authCredentialDto: AuthCredentialsDto,
    ): Promise<{ accessToken: string }> {

        const { username, password } = authCredentialDto;
        const user = await this.userRepository.findOne({
            where: {
                username: username
            }
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayLoad = { username };
            const accessToken: string = await this.jwtService.sign(payload)
            return { accessToken };
        } else {
            throw new UnauthorizedException('please check your login credential')
        }

    }

    // //untuk login SEBELUM pakai TOKEN
    // async signIn(
    //     authCredentialDto: AuthCredentialsDto,
    // ): Promise<string> {

    //     const { username, password } = authCredentialDto;
    //     const user = await this.userRepository.findOne({
    //         where: {
    //             username: username
    //         }
    //     });

    //     if (user && (await bcrypt.compare(password, user.password))) {
    //         return 'succes login'
    //     } else {
    //         throw new UnauthorizedException('please check your login credential')
    //     }

    // }
}
