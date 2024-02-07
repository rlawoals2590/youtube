import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.NODE_ENV === 'dev' ? true : false;
  configure() {
    mongoose.set('debug', this.isDev);
  }
}
