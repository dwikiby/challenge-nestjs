import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { GuestRepository } from './guest.repository';
import { Guest } from './guest.entity';
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayLoad } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(GuestRepository)
        private guestRepository: GuestRepository
    ) {
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

        });
    }

    async validate(payload: JwtPayLoad): Promise<Guest> {
        const { email } = payload;

        const guest: Guest = await this.guestRepository.findOne({
            where: {
                email: email
            }
        });
        if (!guest) {
            throw new UnauthorizedException();
        }
        return guest;
    }
}