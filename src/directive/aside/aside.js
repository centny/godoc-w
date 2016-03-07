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
            function getSch(){
                var sch = window.location.search;
                if(sch && !/\/$/.test(sch)){
                    sch += '/';
                }
                return sch;
            }
            $scope.gotoLocation = function(func, index) {
                var sch = getSch();
                if(sch){
                    sch += '#i';
                }
                window.location.href = (sch || '/#i') + index + (func ? func.name : '');
            };
        }
    };
});
