import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './product/product.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { configService } from './config/config.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mongo'),
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
