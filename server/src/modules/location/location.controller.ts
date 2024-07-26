import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
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
  findAll(@Req() req: Request) {
    return this.locationService.findAll(req);
  }
  @Get('all-location2')
  findAll2(@Req() req: Request) {
    return this.locationService.findAll2(req);
  }
}
