import { Body, Controller, Get, Post } from '@nestjs/common';
import { createApiResponse } from 'src/helpers/utills/common-response';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('create-location')
  async create(@Body() createUserDto: any) {
    const res = await this.locationService.create(createUserDto);
    return createApiResponse(
      'success',
      200,
      'User is created successfully.',
      res,
    );
  }

  @Get('all-location')
  findAll() {
    return this.locationService.findAll();
  }
  @Get('all-location2')
  findAll2() {
    return this.locationService.findAll2();
  }
}
