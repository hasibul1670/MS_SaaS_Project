import { Body, Controller, Post } from '@nestjs/common';
import { DatabaseService } from './database-service.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('create-database')
  async createDatabase(@Body('dbName') dbName: string): Promise<any> {
    return this.databaseService.createDatabase(dbName);
  }
}
