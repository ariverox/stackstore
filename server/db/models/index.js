// Require our models -- these should register the model into mongoose
// so the rest of the application can simply call mongoose.model('User')
// anywhere the User model needs to be used.
require('./product.model.js');
require('./user.model.js');
require('./order.model.js');
require('./review.model.js');
