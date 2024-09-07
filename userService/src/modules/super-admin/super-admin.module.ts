import { Module } from '@nestjs/common';
import { bcryptPasword } from 'src/helpers/bcryptPasword/bcryptPasword';
import { SuperAdminController } from './super-admin.controller';
import { SuperAdminService } from './super-admin.service';

@Module({
  controllers: [SuperAdminController],
  providers: [SuperAdminService, bcryptPasword],
})
export class SuperAdminModule {}
