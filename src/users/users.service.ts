import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {};

    async findAll() {
        return this.userModel.find().exec();
    }

    async findOne(name: string) {
        return this.userModel.findOne({ name: name }).exec();
    }

    async create(body: CreateUserDto) {
        const { email, name, password } = body;
        const isUserExist = await this.userModel.exists({ email });

        if (isUserExist) {
            throw new UnauthorizedException('Already exists the user');
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({
            email,
            name,
            password: hashPassword,
        });

        return user.readOnlyData;
    }

}
