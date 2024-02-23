/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InsuranceSchema } from './insurance.model';
import { InsuranceController } from './insurance-controller';
import { InsuranceService } from './insurance.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Insurance', schema: InsuranceSchema }])
  ],
  controllers: [InsuranceController],
  providers: [InsuranceService],
})
export class InsuranceModule {}
