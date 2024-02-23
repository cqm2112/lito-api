/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const InsuranceSchema = new mongoose.Schema({
    id : Number, 
  name: String,
  description: String,
  image: String,
});

  
