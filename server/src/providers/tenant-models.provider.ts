import { createModelProvider } from 'src/helpers/utills/tenantUtils';
import { Product, ProductSchema } from 'src/product/product.model';

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
