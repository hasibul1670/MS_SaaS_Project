import { createModelProvider } from '../helpers/utills/tenantUtils';
import { Product, ProductSchema } from '../modules/product/product.model';

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
