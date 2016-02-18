angular.module('app').directive("headerDir", function() {
    return {
        templateUrl: 'directive/header/header.html',
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            data: "="
        },
        controller: function($scope, $rootScope, $element, $timeout) {
            var cancel = $scope.$watch('data', function(v) {
                if (v) {
                    $scope.pkgs = [{
                        name: '所有工程'
                    }].concat(v.pkgs);
                    $scope.itemCur = $scope.pkgs[0];


                    var tags = [];
                    angular.forEach(v.tags, function (i, k){
                        tags.push(k + '(' + i + ')');
                    });
                    $scope.tags = ['所有标签'].concat(tags);
                    $scope.tagCur = $scope.tags[0];

                    // cancel();
                }
            });

            $scope.toggleItem = function (item){
                console.log(item);
            };

            $scope.toggleTag = function (item){
                var m = item.match('[^(]*') || [];
                var t = m[0];
                if(!m){
                    return;
                }
                if(t == '所有标签'){
                    t = '';
                }
                $rootScope.getDoc({tags: t});
            };
        }
    };
});
