import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  NotFoundException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { TenantsService } from '../tenant/tenant.service';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {
  constructor(private tenantsService: TenantsService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id']?.toString();
    if (!tenantId) {
      throw new BadRequestException('X-TENANT-ID not provided');
    }
    const tenantExits = await this.tenantsService.getTenantById(tenantId);
    if (!tenantExits) {
      throw new NotFoundException('Tenant does not exist');
    }
    req['tenantId'] = tenantId;
    next();
  }
}
