app.factory('Dish', function($http) {

    return {
        getDishesForChef: function(id) { //returns array of chef objects with dishes array
            return $http.get(`/api/users/${id}/dishes`)
                .then(function(res) {
                    return res.data;
                });
        },
        getOne: function(id) {
            return $http.get(`/api/dishes/${id}`)
                .then(function(res) {
                    return res.data;
                });
        },
        getAll: function(id) {
            return $http.get(`/api/dishes/`)
                .then(function(res) {
                    return res.data;
                });
        },
        postOne: function(dish) {
            return $http.post(`/api/dishes`, dish)
                .then(function(res) {
                    return res.data;
                })
        }
    };
});