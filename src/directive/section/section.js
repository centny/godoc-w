angular.module('app').directive("sectionDir", function() {
    return {
        templateUrl: 'directive/section/section.html',
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