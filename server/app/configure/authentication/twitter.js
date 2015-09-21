'use strict';

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var mongoose = require('mongoose');
var UserModel = mongoose.model('User');

module.exports = function (app) {

    var twitterConfig = app.getValue('env').TWITTER;

    var twitterCredentials = {
        consumerKey: twitterConfig.consumerKey,
        consumerSecret: twitterConfig.consumerSecret,
        callbackUrl: twitterConfig.callbackUrl
    };

    var createNewUser = function (token, tokenSecret, profile) {
        console.log('profile:',profile);
        var name = profile.displayName;

        var rn = Math.floor(Math.random()*100000000);
        var email = 'sfgp'+rn+'@fakesite.com';
        return UserModel.create({
            name: name,
            email: email,
            twitter: {
                id: profile.id,
                username: profile.username,
                token: token,
                tokenSecret: tokenSecret
            }
        });
    };

    var updateUserCredentials = function (user, token, tokenSecret, profile) {
        user.email = "user";
        user.twitter.token = token;
        user.twitter.tokenSecret = tokenSecret;
        user.twitter.username = profile.username;

        return user.save();

    };

    var verifyCallback = function (token, tokenSecret, profile, done) {

        UserModel.findOne({'twitter.id': profile.id}).exec()
            .then(function (user) {
                if (user) { // If a user with this twitter id already exists.
                    return updateUserCredentials(user, token, tokenSecret, profile);
                } else { // If this twitter id has never been seen before and no user is attached.
                    return createNewUser(token, tokenSecret, profile);
                }
            }).then(function (user) {
                done(null, user);
            }, function (err) {
                console.error('Error creating user from Twitter authentication', err);
                done(err);
            });

    };

    passport.use(new TwitterStrategy(twitterCredentials, verifyCallback));

    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {failureRedirect: '/login'}),
        function (req, res) {
            res.redirect('/');
        });

};
