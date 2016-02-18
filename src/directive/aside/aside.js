angular.module('app').directive("asideDir", function() {
    return {
        templateUrl: 'directive/aside/aside.html',
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            data: "="
        },
        controller: function($scope, $rootScope, $element, $timeout) {
            $scope.gotoLocation = function(func, index) {
                window.location.href = '/#i' + index + (func ? func.name : '');
            };
        }
    };
});
