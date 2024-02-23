/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InsuranceModule  } from './insurance.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    InsuranceModule ,
  ],
})
export class AppModule {
  constructor() {}
}
