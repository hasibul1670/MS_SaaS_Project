/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection, Document, Model, Schema, connect } from 'mongoose';

interface TenantDocument extends Document {
  tenantId: string;
}

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

  async createDatabase(dbName: string): Promise<string> {
    const createDbUri = this.configService.get<string>('CREATE_DB_URI');
    if (!createDbUri) {
      throw new Error('CREATE_DB_URI is not defined in the configuration');
    }

    const connectionString = `${createDbUri}/tenant_${dbName}`;

    const dbRegistrationResult = await this.registerTenantDb(
      dbName,
      connectionString,
    );
    console.log(
      '🚀 ~ DatabaseService ~ createDatabase ~ dbRegistrationResult:',
      dbRegistrationResult,
    );

    if (dbRegistrationResult) {
      return `Database tenant-${dbName} created and registered successfully`;
    } else {
      throw new Error(
        'Failed to register the new tenant database in the master database',
      );
    }
  }

  private async registerTenantDb(
    dbName: string,
    connectionString: string,
  ): Promise<boolean> {
    try {
      const tenantSchema = new Schema<TenantDocument>({
        tenantId: { type: String, required: true },
      });

      const TenantModel: Model<TenantDocument> =
        this.masterDbConnection.model<TenantDocument>('Tenant', tenantSchema);

      const newTenant = new TenantModel({
        tenantId: dbName,
      });

      // Validate the new tenant before saving
      const validationResult = newTenant.validateSync();
      if (validationResult) {
        console.error('Tenant validation failed:', validationResult.errors);
        return false;
      }

      await newTenant.save();
      return true;
    } catch (error) {
      console.error('Error registering tenant DB:', error);
      return false;
    }
  }
}
