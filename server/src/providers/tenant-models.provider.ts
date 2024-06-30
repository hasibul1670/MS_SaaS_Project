import { Product, ProductSchema } from 'src/modules/product/product.model';
import { createModelProvider } from '../helpers/utills/tenantUtils';

const productModelProvider = createModelProvider(
  Product.name,
  ProductSchema,
  'TENANT_CONNECTION',
);
// const orderModelProvider = createModelProvider(
//   Auth.name,
//   UserSc,
//   'TENANT_CONNECTION',
// );

export const tenantModels = {
  productModel: productModelProvider,
};
