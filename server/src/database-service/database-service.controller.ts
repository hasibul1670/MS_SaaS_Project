import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '../interface/common/apiResponse';
import { DatabaseService } from './database-service.service';
import { CreateTenantDto } from './dto/databse-service.dto';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('create-database')
  async createDatabase(
    @Body(ValidationPipe) body: CreateTenantDto,
  ): Promise<ApiResponse<any>> {
    const result = await this.databaseService.createDatabase(body);
    return {
      status: 'success',
      statusCode: '200',
      message: `Database is created successfully.`,
      data: result,
    };
  }
}
