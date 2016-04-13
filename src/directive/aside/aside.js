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
            function getSch() {
                var sch = window.location.search;
                if (sch && !/\/$/.test(sch)) {
                    sch += '/';
                }
                return sch;
            }
            $scope.gotoLocation = function(func, item) {
                var sch = getSch();
                if (sch) {
                    sch += '#';
                }
                window.location.href = (sch || '/#') + item.name.replace(/[\/\.]+/g, "_") + (func ? func.name : '');
            };
        }
    };
});