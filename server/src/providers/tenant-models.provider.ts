import { User, UserSchema } from 'src/modules/user/entities/user.entity';
import { createModelProvider } from '../helpers/utills/tenantUtils';
import { Product, ProductSchema } from '../modules/product/product.model';

const productModelProvider = createModelProvider(
  Product.name,
  ProductSchema,
  'TENANT_CONNECTION',
);
const userModelProvider = createModelProvider(
  User.name,
  UserSchema,
  'TENANT_CONNECTION',
);
// const orderModelProvider = createModelProvider(
//   Auth.name,
//   UserSc,
//   'TENANT_CONNECTION',
// );

export const tenantModels = {
  productModel: productModelProvider,
  userModel: userModelProvider,
};
