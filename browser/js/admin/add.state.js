app.config(function($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        templateUrl: 'js/admin/add.html',
        controller: 'AdminController',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser()
            },
            isAdmin: function(user){
              if (!user.isAdmin) throw new Error("Unauthorized");
              return;
            },
            orders: function(){},
            users: function(){},
            products: function(){}
        }
    })
})
