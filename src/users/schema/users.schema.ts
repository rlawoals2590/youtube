import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { now, Document } from 'mongoose';

const options: SchemaOptions = {
    timestamps: true,
};

@Schema(options)
export class User extends Document {
    @Prop({
        required: true,
        unique: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Prop({
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Prop({ default: now })
    createdAt: Date;

    readonly readOnlyData: {
        id: string;
        email: string;
        name: string;
    };
};

export const UserSchema = SchemaFactory.createForClass(User);