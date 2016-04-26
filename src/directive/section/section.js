angular.module('app').directive("sectionDir", function() {
    return {
        templateUrl: 'directive/section/section.html',
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            data: "="
        },
        controller: function($scope, $element, $timeout, $sce) {
            $scope.replace = function(obj) {
                return obj.replace(/[\/\.]/g, "_");
            };

            function getSch() {
                var sch = window.location.search;
                if (sch && !/\/$/.test(sch)) {
                    sch += '/';
                }
                return sch;
            }
            $scope.gotoLocation = function(item) {
                var sch = getSch();
                if (sch) {
                    sch += '#';
                }
                window.location.href = (sch || '/#') + (item.pkg + "/").replace(/[\/\.]+/g, "_") + item.name;
            };
            $scope.is_obj = function(item) {
                return typeof item == "object";
            };
            $scope.repl_ws = function(item) {
                if (item) {
                    return $sce.trustAsHtml(item.replace("\n", "<br/>"));
                } else {
                    return "";
                }
            };
        }
    };
});