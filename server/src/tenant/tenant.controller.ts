import { Controller } from '@nestjs/common';
import { TenantsService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantsService) {}
}
