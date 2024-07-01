import { Injectable } from '@nestjs/common';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { FeatureSchema } from './entities/feature.schema';

@Injectable()
export class FeaturesService {
  async create(createFeatureDto: CreateFeatureDto) {
    const res = await FeatureSchema.create(createFeatureDto);
    return res;
  }

  findAll() {
    return `This action returns all features`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feature`;
  }

  update(id: number, updateFeatureDto: UpdateFeatureDto) {
    return `This action updates a #${id} feature`;
  }

  remove(id: number) {
    return `This action removes a #${id} feature`;
  }
}
