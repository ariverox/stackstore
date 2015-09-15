// app.factory('ProductFactory', function($http) {
//   return {
//     getAll: function getAll () {
//       return $http.get('/api/products/').then(function (response) {
//         return response.data;
//       });
//     },
//     getOne: function getOne (id) {
//       return $http.get('/api/products/' + id).then(function (response) {
//         return response.data;
//       });
//     },
//     remove: function remove (id) {
//       return $http.delete('/api/products/').then(function (response) {

//       });
//     },
//     add: function add (product) {
//       return $http.post('/api/products/').then(function (product) {
//         return product;
//       });
//     },
//     update: function update (id, product) {
//       return $http.put('/api/products/').then(function (response) {
//         return response.data;
//       });
//     }
//   };
// });

