import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }
    // untuk create user dan sign up

    async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialDto;

        const salt = await bcrypt.genSalt();
        const hashesPassword = await bcrypt.hash(password, salt);

        const user = this.create({ username, password: hashesPassword });

        try {
            await this.save(user);
        } catch (error) {
            if (error.code === '23505') {
                //duplicate username
                throw new ConflictException('username already exists');
            } else {
                throw new InternalServerErrorException();
            }

        }
    }

}