angular.module('app').directive("mainDir", function() {
    return {
        templateUrl: 'directive/main/main.html',
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            data: "="
        },
        controller: function($scope, $element, $timeout) {

        }
    };
});