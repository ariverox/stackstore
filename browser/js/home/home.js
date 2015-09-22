app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeController',
        resolve: {
          products: function(ProductFactory){
            return ProductFactory.getAll();
          }
        }
    });
});
