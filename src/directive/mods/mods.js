angular.module('app').directive("modsDir", function() {
    return {
        templateUrl: 'directive/mods/mods.html',
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