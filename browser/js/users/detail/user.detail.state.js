app.config(function($stateProvider){
  $stateProvider.state('userDetail',{
    url:'/user/:id',
    templateUrl:'/js/users/detail/user.detail.html',
    scope: 'UserDetailController'
  })
})
