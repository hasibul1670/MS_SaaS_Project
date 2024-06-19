/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection, connect } from 'mongoose';
import { ApiError } from 'src/helpers/utills/ApiError';
import { TenantModel } from './database-service.model';
import { CreateTenantDto } from './dto/databse-service.dto';

@Injectable()
export class DatabaseService {
  private masterDbConnection: Connection;

  constructor(private configService: ConfigService) {
    this.connectToMasterDb();
  }

  private async connectToMasterDb() {
    const masterDbUri = this.configService.get<string>('DB_URI');
    if (!masterDbUri) {
      throw new Error('MASTER_DB_URI is not defined in the configuration');
    }
    this.masterDbConnection = (await connect(masterDbUri)).connection;
  }

  async createDatabase(payload: CreateTenantDto): Promise<any> {
    const dbName = payload.tenantId;
    try {
      const res = await TenantModel.create(payload);
      return res;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw ApiError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        `Failed to create database '${dbName}'`,
        error.message,
      );
    }
  }
}
