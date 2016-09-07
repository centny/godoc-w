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
            $scope.gotoId = function(id) {
                var sch = getSch();
                if (sch) {
                    sch += '#';
                }
                window.location.href = (sch || '/#') + id;
            };
            $scope.gotoFunc = function(func) {
                var sch = getSch();
                if (sch) {
                    sch += '#';
                }
                window.location.href = (sch || '/#') + (func.pkg + "/" + func.name).replace(/[\/\.]+/g, "_");
            };
        }
    };
});