import { Injectable } from '@nestjs/common';
import { Document, PipelineStage } from 'mongoose';
import { ApiError } from 'src/helpers/utills/ApiError';
import { LocationModel } from './location.schema';

@Injectable()
export class LocationService {
  async create(createUserDto: any) {
    console.log(
      '🚀 ~ LocationService ~ create ~ createUserDto:',
      createUserDto,
    );
    try {
      const documents = await LocationModel.find();
      for (let i = 0; i < documents.length; i++) {
        console.log('🚀 ~ LocationService ~ Update ~ i:', i);
        const document = documents[i];
        await LocationModel.findByIdAndUpdate(document._id, {
          $set: { countryId: i + 1 },
        });
      }
      return { success: true, message: 'Country IDs updated successfully.' };
    } catch (error) {
      throw ApiError(400, 'Failed to update country IDs', error.message);
    }
  }

  async findAll() {
    try {
      const name = 'Bangdong';
      const data = await LocationModel.findOne({ name: name }).lean();
      return data;
    } catch (error) {
      console.log('🚀 ~ LocationService ~ findAll ~ error:', error);
    }
  }
  async findAll2(): Promise<Document[]> {
    try {
      const skip = 0;
      const limit = 6000;
      const searchQuery = 'ban';
      const pipeline: PipelineStage[] = [
        {
          $match: {
            $or: [{ name: { $regex: `^${searchQuery}`, $options: 'i' } }],
          },
        },
        { $skip: skip },
        { $limit: limit },
      ];
      const res = await LocationModel.aggregate(pipeline);
      return res;
    } catch (error) {
      console.log('Error in findAll:', error);
      throw error;
    }
  }
}
