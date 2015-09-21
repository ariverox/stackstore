/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */

module.exports = {
  "DATABASE_URI": "mongodb://localhost:27017/stackstore",
  "SESSION_SECRET": "Optimus Prime is my real dad",
  "TWITTER": {
    "consumerKey": "l5VHP0VsIITCl8Ml5XRtKuMve",
    "consumerSecret": "2Wj4NdujnZDwPZjbIL4at4mYZ3LnecH9wFjPU9THwjx4EyY5ym",
    "callbackUrl": "http://127.0.0.1:1337/auth/twitter/callback"
  },
  "FACEBOOK": {
    "clientID": "1646657585605570",
    "clientSecret": "f7625e5a929c9a0dcc92d650daadbbfb",
    "callbackURL": "http://127.0.0.1:1337/auth/facebook/callback"
  },
  "GOOGLE": {
    "clientID": "753707940502-8kbkb4kucjqo14l4ueijji1bfd2408mp.apps.googleusercontent.com",
    "clientSecret": "yyAkkTBWQ2suUpvmBM8jD0YA",
    "callbackURL": "http://127.0.0.1:1337/auth/google/callback"
  },
  "STRIPE" : {
    "secret": "sk_test_mvPr55DEzDAflKPOkGoP86CP"
  }
};