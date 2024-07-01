import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { model } from 'mongoose';

@Schema()
export class Feature {
  @Prop({ required: true, unique: true })
  moduleName: string;
}
const FeatureSchema = SchemaFactory.createForClass(Feature);

export const FeatureModel = model('Feature', FeatureSchema);
