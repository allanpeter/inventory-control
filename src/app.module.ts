import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';

@Module({
  imports: [UsersModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: '192.168.0.205',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'inventory',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true, // set to false in production)
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
