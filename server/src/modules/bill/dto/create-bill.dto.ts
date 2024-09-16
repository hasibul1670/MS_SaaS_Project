import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { VALIDATION_MESSAGES } from 'src/helpers/validatorMessage/validator-messages';

enum PaymentStatusEnum {
  Paid = 'Paid',
  Unpaid = 'Unpaid',
  PartiallyPaid = 'PartiallyPaid',
}

export class CreateBillDto {
  @IsString({ message: `Bill Id ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `Bill Id ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  billId: string;

  @IsEnum(PaymentStatusEnum, {
    message: `paymentStatus must be one of the following values: ${Object.values(PaymentStatusEnum).join(', ')}`,
  })
  @IsString({ message: `paymentStatus ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `paymentStatus ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  paymentStatus: string;

  @IsString({ message: `paymentMethod ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `paymentMethod ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  paymentMethod: string;

  @IsString({ message: `paymentNote ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `paymentNote ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  paymentNote: string;

  @IsNumber({}, { message: `originalAmount ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({ message: `originalAmount ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  originalAmount: number;

  @IsString({ message: `discount ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({ message: `discount ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  discount: number;
  @IsNumber({}, { message: `paidAmount ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({ message: `paidAmount ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  paidAmount: number;
  @IsNumber({}, { message: `dueAmount ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({ message: `dueAmount ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  dueAmount: number;

  @IsNumber(
    {},
    {
      message: `netTotalAfterDiscount number${VALIDATION_MESSAGES.IS_NUMBER}`,
    },
  )
  @IsNotEmpty({
    message: `netTotalAfterDiscount number${VALIDATION_MESSAGES.IS_REQUIRED}`,
  })
  netTotalAfterDiscount: number;

  @IsString({ message: ` dueBillDate ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({
    message: `dueBillDate ${VALIDATION_MESSAGES.IS_REQUIRED}`,
  })
  dueBillDate: string;

  @IsString({ message: `createdBy ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `createdBy ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  createdBy: string;

  @IsNotEmpty({ message: `billTo ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  billTo: BillToDto;

  @IsArray({ message: 'billInfo must be an array' })
  @ValidateNested({ each: true })
  itemizedInfo: itemizedInfoDto[];

  @IsArray({ message: 'partialPaymentData must be an array' })
  @ValidateNested({ each: true })
  partialPaymentData: partialPaymentDataDto[];
}

export class BillToDto {
  @IsString({ message: `name ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `name ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  customerName: string;
  @IsString({ message: `customerId ${VALIDATION_MESSAGES.IS_STRING}` })
  customerId: string;
  @IsString({ message: `customerId ${VALIDATION_MESSAGES.IS_STRING}` })
  customerPhoneNumber: string;
  @IsString({ message: `email ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `email ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  customerEmail: string;
}

export class itemizedInfoDto {
  @IsString({ message: `itemCategory ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `itemCategory ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  itemCategory: string;

  @IsString({ message: `itemDescription ${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `itemDescription ${VALIDATION_MESSAGES.IS_REQUIRED}` })
  itemDescription: string;

  @IsNumber({}, { message: `quantity ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({
    message: `quantity ${VALIDATION_MESSAGES.IS_REQUIRED}`,
  })
  quantity: number;

  @IsNumber({}, { message: `unitPrice ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({
    message: `unitPrice ${VALIDATION_MESSAGES.IS_REQUIRED}`,
  })
  unitPrice: number;

  @IsNumber({}, { message: `totalItemPrice ${VALIDATION_MESSAGES.IS_NUMBER}` })
  @IsNotEmpty({
    message: `totalItemPrice ${VALIDATION_MESSAGES.IS_REQUIRED}`,
  })
  totalItemPrice: number;
}

export class partialPaymentDataDto {
  @IsString({ message: `paymentDate ${VALIDATION_MESSAGES.IS_STRING}` })
  paymentDate: string;
  @IsNumber({}, { message: `paymentAmount ${VALIDATION_MESSAGES.IS_NUMBER}` })
  paymentAmount: number;
  @IsString({ message: `paymentMethod ${VALIDATION_MESSAGES.IS_STRING}` })
  paymentMethod: string;
  @IsString({ message: `note ${VALIDATION_MESSAGES.IS_STRING}` })
  note: string;
  @IsString({ message: `paymentAcceptBy ${VALIDATION_MESSAGES.IS_STRING}` })
  paymentAcceptBy: string;
}
