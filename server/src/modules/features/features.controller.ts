import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { createApiResponse } from '../../helpers/utills/common-response';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { FeaturesService } from './features.service';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @Post('create-features')
  async create(@Body() createFeatureDto: CreateFeatureDto) {
    const result = await this.featuresService.create(createFeatureDto);
    return createApiResponse(
      'success',
      200,
      'Admin is created successfully.',
      result,
    );
  }

  @Get('all-features')
  async findAll() {
    const res = await this.featuresService.findAll();
    return createApiResponse(
      'success',
      200,
      'Fetched All Features successfully.',
      res,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: any) {
    const res = await this.featuresService.findOne(id);
    return createApiResponse(
      'success',
      200,
      'Fetched All Features successfully.',
      res,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeatureDto: UpdateFeatureDto) {
    return this.featuresService.update(+id, updateFeatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.featuresService.remove(+id);
  }
}
