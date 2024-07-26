import { Injectable } from '@nestjs/common';
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

  async findAll(req: any) {
    try {
      const limit = parseInt(req.query.limit);
      const page = parseInt(req.query.page);
      const skip = (page - 1) * limit;

      const pipeline = [
        {
          $skip: skip, // Skip documents for previous pages
        },
        {
          $limit: limit, // Limit the number of documents for the current page
        },
      ];

      const data = await LocationModel.aggregate(pipeline);
      const count = await LocationModel.countDocuments();

      const response = {
        total: count,
        page: page,
        skip: skip,
        limit: limit,
        totalPages: Math.ceil(count / limit),
        data: data,
      };

      return response;
    } catch (error) {
      console.log('🚀 ~ LocationService ~ findAll ~ error:', error);
    }
  }

  async findAll2(req: any): Promise<any> {
    try {
      const limit = parseInt(req.query.limit, 10) || 10; // Default limit to 10 if not provided
      const page = parseInt(req.query.page, 10) || 1; // Default page to 1 if not provided
      const skip = (page - 1) * limit;

      // Using .find() with .skip() and .limit()
      const data = await LocationModel.find().skip(skip).limit(limit);
      const count = await LocationModel.countDocuments();

      const response = {
        total: count,
        page: page,
        skip: skip,
        limit: limit,
        totalPages: Math.ceil(count / limit),
        data: data,
      };

      return response;
    } catch (error) {
      console.error('Error in findAll2:', error);
      throw error;
    }
  }
}
