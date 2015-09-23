app.factory('ProductFactory', function($http) {
    var countryData = {
        'All': {
            name: 'All'
        },
        'China': {
            name: 'China',
            abbr: 'cn'
        },
        'Cuba': {
            name: 'Cuba',
            abbr: 'cu'
        },
        'France': {
            name: 'France',
            abbr: 'fr'
        },
        'Germany': {
            name: 'Germany',
            abbr: 'de'
        },
        'India': {
            name: 'India',
            abbr: 'in'
        },
        'Japan': {
            name: 'Japan',
            abbr: 'jp'
        },
        'Netherlands': {
            name: 'Netherlands',
            abbr: 'nl'
        },
        'Nigeria': {
            name: 'Nigeria',
            abbr: 'ng'
        },
        'Peru': {
            name: 'Peru',
            abbr: 'pe'
        },
        'South Korea': {
            name: 'South Korea',
            abbr: 'kr'
        },
        'Spain': {
            name: 'Spain',
            abbr: 'es'
        },
        'Turkey': {
            name: 'Turkey',
            abbr: 'tr'
        },
        'United Kingdom': {
            name: 'United Kingdom',
            abbr: 'gb'
        },
        'United States': {
            name: 'United States',
            abbr: 'us'
        },
    };

    return {
        countryData: countryData,
        getAll: function(categories) {
            var config = {
                params: {}
            };
            if (categories && categories.length) {
                config = {
                    params: {
                        categories: categories
                    }
                };
            }
            return $http.get('/api/products', config).then(function(res) {
                return res.data;
            });
        },
        getOne: function(id) {
            return $http.get('/api/products/' + id).then(function(response) {
                return response.data;
            });
        },
        remove: function(id) {
            return $http.delete('/api/products/' + id).then(function() {

            });
        },
        add: function(product) {
            return $http.post('/api/products', product).then(function(response) {
                return response.data;
            });
        },
        update: function(id, product) {
            return $http.put('/api/products/' + id, product).then(function(response) {
                return response.data;
            });
        }
    };

});
