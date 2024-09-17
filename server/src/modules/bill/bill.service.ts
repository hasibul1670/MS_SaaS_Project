import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApiError } from 'src/helpers/utills/ApiError';
import { generateId } from 'src/helpers/utills/generateId';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './schema/bill.schema';

@Injectable()
export class BillService {
  constructor(@Inject('BILL_MODEL') private BillModel: Model<Bill>) {}
  async create(createBillDto: CreateBillDto) {
    try {
      const lastDoc = await this.BillModel.countDocuments();
      const generateID = await generateId(lastDoc, 'Bill');
      const billPayload = {
        ...createBillDto,
        billId: generateID,
      };
      const res = await this.BillModel.create(billPayload);
      return res;
    } catch (error) {
      throw ApiError(400, 'Error Occured !!', error.message);
    }
  }

  findAll() {
    return `This action returns all bill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bill`;
  }

  update(id: number, updateBillDto: UpdateBillDto) {
    return `This action updates a #${id} bill`;
  }

  remove(id: number) {
    return `This action removes a #${id} bill`;
  }
}
