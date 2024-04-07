import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { genSaltSync, hashSync } from 'bcryptjs';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { UserModel, UserModelDocument } from './user.model';

@Injectable()
export class AuthService {
    constructor(@InjectModel(UserModel.name) private userMode: Model<UserModelDocument>) {}

    async createUser(dto:AuthDto) {
        const salt = genSaltSync(10);
        const newUser = new this.userMode({
            email: dto.login,
            passwordHash: hashSync(dto.password, salt),
        });
        return newUser.save();
}
    async findUser(email: string) {
        return this.userMode.findOne({email}).exec();
    }

}
