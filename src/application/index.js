angular.module('app', ['tmpl'])
    .controller('mainCtrl', function($scope, $rootScope, $http) {
        var option = {
            method: "GET",
            url: "/doc/case/list",
        };
        loadingLayer.in();
        $http(option).then(function(response) {
            $rootScope.appData = response.data;
            loadingLayer.out();
        }, function(err) {
            loadingLayer.out();
            throw {
                type: -1,
                data: err
            };
        });
    });