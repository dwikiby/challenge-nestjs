import { IsString, MaxLength, MinLength, Matches } from "class-validator";

export class AuthHotelCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    email: string

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    hp: number
}