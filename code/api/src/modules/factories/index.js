const factory = require('factory-bot')
const User = require('../user/model');
// const Subscription = require('../subscription/model');
// const Product = require('../product/model');
// const Crate = require('../crate/model');
// const Delivery = require('../delivery/model');
const params = require('../../config/params');

console.log(factory)
factory.define('user', User, {
  name: 'test_user',
  role: params.user.roles.user,
  createdAt: new Date(),
  updatedAt: new Date(),
  profileImage: 'test_user',
  streetAddress: '2800 South St.',
  city: 'Denver',
  state: 'CO',
  zip: '80113',
  description: `I buy lots of crates`
});

// factory.define('product', Product, {
//   name: 'shirt',
//   slug: 'shirt',
//   description: 'a long sleeve shirt',
//   type: params.product.types.accessory.id,
//   gender: params.user.gender.male.id,
//   image: 'shirt',
//   createdAt: new Date(),
//   updatedAt: new Date()
// });

export default factory