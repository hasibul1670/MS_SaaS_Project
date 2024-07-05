import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { model } from 'mongoose';

@Schema()
export class Location {}
export const LocationSchema = SchemaFactory.createForClass(Location);
export const LocationModel = model<any>('location', LocationSchema);
