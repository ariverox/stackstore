app.config(function($stateProvider) {
  $stateProvider.state('UserList', {
    url: '/api/users',
    templateUrl: '/browser/js/users/list/user.list.html'
  })
});
