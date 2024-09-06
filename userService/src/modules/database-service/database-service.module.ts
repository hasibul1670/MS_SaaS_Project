import { Module } from '@nestjs/common';
import { DatabaseController } from './database-service.controller';
import { DatabaseService } from './database-service.service';

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseServiceModule {}
