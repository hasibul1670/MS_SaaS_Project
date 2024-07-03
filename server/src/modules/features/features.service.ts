import { Injectable } from '@nestjs/common';
import { ApiError } from '../../helpers/utills/ApiError';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { FeatureModel } from './entities/feature.schema';

@Injectable()
export class FeaturesService {
  async create(createFeatureDto: CreateFeatureDto) {
    try {
      const res = await FeatureModel.create(createFeatureDto);
      return res;
    } catch (error) {
      throw ApiError(400, 'Error Occured !!', error.message);
    }
  }

  async findAll() {
    const res = await FeatureModel.find();
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} feature`;
  }

  update(id: number, updateFeatureDto: UpdateFeatureDto) {
    console.log(
      '🚀 ~ FeaturesService ~ update ~ updateFeatureDto:',
      updateFeatureDto,
    );
    return `This action updates a #${id} feature`;
  }

  remove(id: number) {
    return `This action removes a #${id} feature`;
  }
}
