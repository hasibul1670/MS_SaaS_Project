import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class CompanyInfo {
  @Prop({ type: String, required: true })
  companyName: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  companyTitle: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  country: string;
}

@Schema()
export class BillingInfo {
  @Prop({ type: String, required: true })
  paymentBy: string;

  @Prop({ type: String, required: true })
  paymentMethod: string;

  @Prop({ type: Number, required: true })
  paymentAmount: number;

  @Prop({ type: String, required: true })
  paymentDate: string;

  @Prop({ type: String, required: true })
  paymentStatus: string;
}
