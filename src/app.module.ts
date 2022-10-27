
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Welcome@1',
      database: 'postgres',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule { }