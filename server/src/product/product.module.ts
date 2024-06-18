import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TenantsMiddleware } from 'src/middleware/tenants.middleware';
import { tenantModels } from 'src/providers/tenant-models.provider';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, tenantModels.productModel],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(ProductController);
  }
}
